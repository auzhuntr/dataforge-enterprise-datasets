/**
 * DataForge IT — AI Web Widget Assistant
 * Self-contained chat widget answering from a fixed, pre-written FAQ.
 * Usage: <script src="widget.js" data-name="DataForge AI Assistant" data-kb="knowledge_base.json"></script>
 */

(function () {
  "use strict";

  if (document.getElementById("ai-widget-root")) return;

  const currentScript = document.currentScript;
  const API_ENDPOINT = (currentScript && currentScript.getAttribute("data-api")) || "/api/chat";
  const KB_URL = (currentScript && currentScript.getAttribute("data-kb")) || "knowledge_base.json";
  const BOT_NAME = (currentScript && currentScript.getAttribute("data-name")) || "DataForge AI Assistant";

  let knowledgeBase = null;

  // Preloaded baseline knowledge in case JSON fetch is blocked locally
  const defaultKB = {
    "company_name": "DataForge IT",
    "tagline": "Open-licence data feeds, refreshed every 12 hours",
    "website_summary": "DataForge IT sells cleaned, ready-to-use datasets built only from openly licensed public sources, refreshed every 12 hours, plus custom data feed and IT services.",
    "quick_prompts": [
      "What datasets do you have?",
      "How often is data updated?",
      "How do I receive my data?",
      "Can you build a custom data feed?"
    ],
    "faq": [
      {
        "question": "What datasets are available in your catalog?",
        "keywords": [
          "datasets",
          "catalog",
          "feeds",
          "what data",
          "fda",
          "recalls",
          "universities",
          "brewery",
          "arxiv",
          "wikipedia",
          "list"
        ],
        "answer": "Our catalogue only includes datasets built from sources whose licences allow commercial reuse:\n• **openFDA** (public domain): drug recalls, food recalls, medical device classifications and the drug NDC directory.\n• **arXiv** paper metadata (CC0): recent AI research papers.\n• **Wikimedia pageviews** (CC0): Wikipedia attention trends.\n• **World universities** and **Open Brewery DB** directories (MIT licence).\nEach card in the **Data Catalog** shows its source and licence, and has a free 50-row sample CSV."
      },
      {
        "question": "How often is data refreshed?",
        "keywords": [
          "refresh",
          "frequency",
          "updated",
          "how often",
          "schedule",
          "history",
          "12"
        ],
        "answer": "Datasets are refreshed on a 12-hour schedule (**06:00 and 18:00 Sydney time**). Each dataset card shows exactly when it was last updated."
      },
      {
        "question": "How do I receive my data after paying?",
        "keywords": [
          "deliver",
          "delivery",
          "receive",
          "after",
          "paid",
          "payment",
          "download",
          "email",
          "how long"
        ],
        "answer": "After your payment is confirmed, we run a fresh extract, review it for accuracy and privacy, and then email it to your PayPal email address as soon as possible. Nothing is sent until it has been checked."
      },
      {
        "question": "How does pricing and the new member discount work?",
        "keywords": [
          "pricing",
          "cost",
          "price",
          "discount",
          "promo",
          "code",
          "coupon",
          "newmember10",
          "rates",
          "membership"
        ],
        "answer": "Every dataset shows a monthly subscription price and a one-off price on its card. Monthly plans get a **10% new member discount**, already shown on each card and applied at checkout. A monthly plan covers one month of 12-hourly updates with no automatic renewal. Prices are in USD."
      },
      {
        "question": "Can you build a custom data feed?",
        "keywords": [
          "custom",
          "bespoke",
          "pipeline",
          "request",
          "sample",
          "quote"
        ],
        "answer": "Yes. Use the **Request Custom Data Feed** form on this page to describe the data you need. We only work with sources that allow the data to be used and shared, and we'll reply by email."
      },
      {
        "question": "What is your refund policy?",
        "keywords": [
          "refund",
          "money back",
          "cancel",
          "faulty",
          "error",
          "wrong"
        ],
        "answer": "If a one-off dataset is faulty or not delivered, we refund the purchase. If a subscription delivery fails because of an error on our side, we refund that month. This is in addition to your rights under the Australian Consumer Law. See our **Refund Policy** page for details."
      },
      {
        "question": "How do I contact you?",
        "keywords": [
          "support",
          "contact",
          "email",
          "talk",
          "sales",
          "help"
        ],
        "answer": "Use the contact form on this page and we'll reply by email as soon as possible."
      }
    ]
  };

  // Inject Scoped Styles
  const styleEl = document.createElement("style");
  styleEl.textContent = `
    #ai-widget-root {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 999999;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      line-height: 1.5;
    }
    #ai-widget-root * { box-sizing: border-box; margin: 0; padding: 0; }
    .ai-widget-launcher {
      width: 60px; height: 60px; border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      color: #ffffff; border: 2px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      position: relative;
    }
    .ai-widget-launcher:hover { transform: scale(1.08); box-shadow: 0 12px 28px rgba(6, 182, 212, 0.55); }
    .ai-widget-launcher svg { width: 28px; height: 28px; fill: currentColor; transition: transform 0.25s ease; }
    .ai-widget-launcher.active svg { transform: rotate(90deg); }
    .ai-widget-badge {
      position: absolute; top: -2px; right: -2px;
      width: 14px; height: 14px; background: #10b981;
      border: 2px solid #0b0f19; border-radius: 50%;
    }
    .ai-widget-window {
      position: absolute; bottom: 76px; right: 0;
      width: 390px; height: 560px;
      max-width: calc(100vw - 32px); max-height: calc(100vh - 100px);
      background: #0f172a; border-radius: 20px;
      box-shadow: 0 20px 45px rgba(0, 0, 0, 0.6);
      border: 1px solid #334155;
      display: flex; flex-direction: column; overflow: hidden;
      opacity: 0; transform: translateY(16px) scale(0.96);
      pointer-events: none; transition: all 0.24s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .ai-widget-window.open { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }
    .ai-widget-header {
      background: #0b0f19; color: #ffffff;
      padding: 16px 20px; display: flex; align-items: center;
      justify-content: space-between; border-bottom: 1px solid #1e293b;
    }
    .ai-widget-header-info { display: flex; align-items: center; gap: 10px; }
    .ai-widget-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      display: flex; align-items: center; justify-content: center;
      font-weight: 800; font-size: 13px; color: #fff;
    }
    .ai-widget-title-wrap h4 { font-size: 14.5px; font-weight: 700; color: #f8fafc; }
    .ai-widget-status { font-size: 11.5px; color: #94a3b8; display: flex; align-items: center; gap: 5px; }
    .ai-widget-status-dot { width: 7px; height: 7px; background: #10b981; border-radius: 50%; box-shadow: 0 0 6px #10b981; }
    .ai-widget-close-btn {
      background: transparent; border: none; color: #94a3b8;
      cursor: pointer; padding: 4px; border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
    }
    .ai-widget-close-btn:hover { color: #ffffff; }
    .ai-widget-body {
      flex: 1; padding: 18px 16px; overflow-y: auto;
      display: flex; flex-direction: column; gap: 12px; background: #0f172a;
    }
    .ai-widget-message {
      max-width: 86%; padding: 11px 15px; border-radius: 14px;
      font-size: 13.5px; line-height: 1.55; word-wrap: break-word; white-space: pre-wrap;
      animation: aiFadeIn 0.2s ease-out;
    }
    .ai-widget-message.bot {
      background: #1e293b; color: #f1f5f9; align-self: flex-start;
      border-bottom-left-radius: 3px; border: 1px solid #334155;
    }
    .ai-widget-message.user {
      background: linear-gradient(135deg, #06b6d4, #2563eb);
      color: #ffffff; align-self: flex-end; border-bottom-right-radius: 3px;
    }
    .ai-widget-message strong { font-weight: 700; color: #38bdf8; }
    .ai-widget-message.user strong { color: #ffffff; }
    .ai-widget-faq-pills { display: flex; flex-direction: column; gap: 8px; margin-top: 4px; }
    .ai-widget-faq-title { font-size: 11px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-left: 2px; }
    .ai-widget-pill {
      background: #1e293b; border: 1px solid #334155; border-radius: 14px;
      padding: 8px 13px; font-size: 12.5px; font-weight: 500; color: #cbd5e1;
      cursor: pointer; text-align: left; transition: all 0.16s ease;
    }
    .ai-widget-pill:hover { background: #334155; border-color: #38bdf8; color: #38bdf8; transform: translateX(3px); }
    .ai-widget-typing {
      display: none; align-self: flex-start; background: #1e293b;
      border: 1px solid #334155; padding: 10px 14px; border-radius: 12px; gap: 5px; align-items: center;
    }
    .ai-widget-typing.visible { display: flex; }
    .ai-widget-typing-dot { width: 6px; height: 6px; background: #94a3b8; border-radius: 50%; animation: aiPulse 1.4s infinite ease-in-out; }
    .ai-widget-typing-dot:nth-child(2) { animation-delay: 0.2s; }
    .ai-widget-typing-dot:nth-child(3) { animation-delay: 0.4s; }
    .ai-widget-footer {
      padding: 12px 16px; background: #0b0f19; border-top: 1px solid #1e293b;
      display: flex; gap: 8px; align-items: center;
    }
    .ai-widget-input {
      flex: 1; border: 1px solid #334155; border-radius: 20px;
      padding: 9px 15px; font-size: 13.5px; outline: none;
      background: #1e293b; color: #f8fafc; transition: all 0.2s ease;
    }
    .ai-widget-input:focus { border-color: #06b6d4; box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2); }
    .ai-widget-send-btn {
      width: 38px; height: 38px; border-radius: 50%;
      background: linear-gradient(135deg, #06b6d4, #2563eb); border: none;
      color: #ffffff; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: all 0.18s ease;
    }
    .ai-widget-send-btn:hover { transform: scale(1.05); }
    .ai-widget-send-btn svg { width: 16px; height: 16px; fill: currentColor; }
    @keyframes aiFadeIn { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes aiPulse { 0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
  `;
  document.head.appendChild(styleEl);

  const rootEl = document.createElement("div");
  rootEl.id = "ai-widget-root";
  rootEl.innerHTML = `
    <button class="ai-widget-launcher" id="ai-widget-launcher" title="Chat with DataForge Assistant">
      <div class="ai-widget-badge"></div>
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
    </button>
    <div class="ai-widget-window" id="ai-widget-window">
      <div class="ai-widget-header">
        <div class="ai-widget-header-info">
          <div class="ai-widget-avatar">DF</div>
          <div class="ai-widget-title-wrap">
            <h4>${BOT_NAME}</h4>
            <div class="ai-widget-status"><span class="ai-widget-status-dot"></span> Online &bull; Instant Knowledge Base</div>
          </div>
        </div>
        <button class="ai-widget-close-btn" id="ai-widget-close" aria-label="Close Chat">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </div>
      <div class="ai-widget-body" id="ai-widget-body">
        <div class="ai-widget-message bot">
          👋 Hi! I am the **DataForge IT Assistant**. Ask me about our datasets, delivery, refunds, custom data feeds, or the 10% new member discount!
        </div>
        <div class="ai-widget-faq-pills" id="ai-widget-pills">
          <span class="ai-widget-faq-title">Quick Questions</span>
        </div>
        <div class="ai-widget-typing" id="ai-widget-typing">
          <div class="ai-widget-typing-dot"></div>
          <div class="ai-widget-typing-dot"></div>
          <div class="ai-widget-typing-dot"></div>
        </div>
      </div>
      <div class="ai-widget-footer">
        <input type="text" class="ai-widget-input" id="ai-widget-input" placeholder="Ask about our datasets or services..." autocomplete="off"/>
        <button class="ai-widget-send-btn" id="ai-widget-send" aria-label="Send Message">
          <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(rootEl);

  const launcher = document.getElementById("ai-widget-launcher");
  const win = document.getElementById("ai-widget-window");
  const closeBtn = document.getElementById("ai-widget-close");
  const body = document.getElementById("ai-widget-body");
  const input = document.getElementById("ai-widget-input");
  const sendBtn = document.getElementById("ai-widget-send");
  const typing = document.getElementById("ai-widget-typing");
  const pillsContainer = document.getElementById("ai-widget-pills");

  function scrollToBottom() {
    body.scrollTop = body.scrollHeight;
  }

  function toggleChat() {
    win.classList.toggle("open");
    launcher.classList.toggle("active");
    if (win.classList.contains("open")) {
      input.focus();
      scrollToBottom();
    }
  }

  launcher.addEventListener("click", toggleChat);
  closeBtn.addEventListener("click", toggleChat);

  function appendMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = `ai-widget-message ${sender}`;
    const formatted = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    msg.innerHTML = formatted;
    body.insertBefore(msg, typing);
    scrollToBottom();
  }

  function clientMatchQuery(text) {
    const kb = knowledgeBase || defaultKB;
    const lower = text.toLowerCase().trim();
    let bestMatch = null;
    let maxScore = 0;

    for (const item of (kb.faq || [])) {
      let score = 0;
      for (const kw of (item.keywords || [])) {
        if (lower.includes(kw.toLowerCase())) score += 2;
      }
      const qWords = item.question.toLowerCase().split(/\s+/);
      for (const w of qWords) {
        if (w.length > 3 && lower.includes(w)) score += 1;
      }
      if (score > maxScore) {
        maxScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && maxScore > 0) {
      return bestMatch.answer;
    }

    return "Thanks for asking! You can browse every dataset, with its source and licence, in our **Data Catalog** section, or describe the data you need in the contact form and we'll reply by email.";
  }

  async function handleSend(userText) {
    const text = (userText || input.value).trim();
    if (!text) return;

    appendMessage(text, "user");
    input.value = "";
    if (pillsContainer) pillsContainer.style.display = "none";

    typing.classList.add("visible");
    scrollToBottom();

    // Check remote endpoint first if configured, otherwise instant client matching
    let reply = "";
    try {
      if (API_ENDPOINT && API_ENDPOINT !== "/api/chat") {
        const res = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: text })
        });
        if (res.ok) {
          const d = await res.json();
          reply = d.reply || "";
        }
      }
    } catch (e) {
      // Fall through to instant client-side matching
    }

    if (!reply) {
      reply = clientMatchQuery(text);
    }

    setTimeout(() => {
      typing.classList.remove("visible");
      appendMessage(reply, "bot");
    }, 280);
  }

  sendBtn.addEventListener("click", () => handleSend());
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  });

  // Load Knowledge Base & populate quick pills
  fetch(KB_URL)
    .then(r => r.json())
    .then(data => {
      knowledgeBase = data;
      const prompts = data.quick_prompts || defaultKB.quick_prompts;
      prompts.forEach(p => {
        const btn = document.createElement("button");
        btn.className = "ai-widget-pill";
        btn.textContent = p;
        btn.addEventListener("click", () => handleSend(p));
        pillsContainer.appendChild(btn);
      });
    })
    .catch(() => {
      knowledgeBase = defaultKB;
      defaultKB.quick_prompts.forEach(p => {
        const btn = document.createElement("button");
        btn.className = "ai-widget-pill";
        btn.textContent = p;
        btn.addEventListener("click", () => handleSend(p));
        pillsContainer.appendChild(btn);
      });
    });

})();
