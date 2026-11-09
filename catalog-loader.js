/* DataForge IT - loads the latest published catalogue.
 * The 12-hour refresh on the office PC checks the data, then pushes catalog.json and the
 * sample CSVs to GitHub (auzhuntr/dataforge-enterprise-datasets). The website reads them
 * from there, so new data appears without a Netlify deploy. If GitHub can't be reached,
 * the copy bundled with the site (catalog-data.js) is used instead. */
(function () {
  "use strict";
  var BASE = new URL("./", document.baseURI).href;
  window.DATAFORGE_DATA_BASE = BASE;

  window.loadLatestCatalog = async function () {
    try {
      var res = await fetch(BASE + "catalog.json", { cache: "no-store" });
      if (!res.ok) return false;
      var remote = await res.json();
      var local = window.DATAFORGE_CATALOG;
      if (!remote || !Array.isArray(remote.datasets) || !remote.datasets.length) return false;
      if (local && local.generated_at_utc && remote.generated_at_utc < local.generated_at_utc) return false;
      remote.datasets.forEach(function (d) { d.sample_csv_url = BASE + d.sample_csv_url; });
      window.DATAFORGE_CATALOG = remote;
      return true;
    } catch (e) {
      return false;
    }
  };

  // Sample CSVs hosted on GitHub open as text by default; download them as files instead.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[download]");
    if (!a || a.href.indexOf(BASE) !== 0) return;
    e.preventDefault();
    fetch(a.href).then(function (r) { if (!r.ok) throw new Error(r.status); return r.blob(); })
      .then(function (blob) {
        var url = URL.createObjectURL(blob), t = document.createElement("a");
        t.href = url; t.download = a.href.split("/").pop();
        document.body.appendChild(t); t.click(); t.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      })
      .catch(function () { window.open(a.href, "_blank", "noopener"); });
  });
})();
