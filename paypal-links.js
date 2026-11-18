/* PayPal hosted payment links: NONE. All PayPal payment links were deleted in PayPal
 * on 2026-11-19 (James's instruction) and their codes removed from this file.
 * To sell again, create new links in PayPal and add them here. */
window.DATAFORGE_PAYPAL = {};
/* 2026-11-13: purchases PAUSED while packs are upgraded (James approved). Set to false to sell again. */
window.DATAFORGE_SALES_PAUSED = true;
window.dataforgePayUrl = function (datasetId, plan) {
  if (window.DATAFORGE_SALES_PAUSED) return null;
  var e = (window.DATAFORGE_PAYPAL || {})[datasetId];
  var id = e && e[plan];
  return id ? "https://www.paypal.com/ncp/payment/" + id : null;
};
