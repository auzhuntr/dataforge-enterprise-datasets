/* PayPal hosted payment links. Prices are fixed on PayPal's side, so they cannot be
 * altered in the browser. Add a dataset here (and create its PayPal buttons) before selling it. */
window.DATAFORGE_PAYPAL = {
      world_universities_poi:   { oneoff: "H2Q8UD77W2GN6", monthly: "5DBSS9WDQZ8L8" },
      open_brewery_poi:         { oneoff: "QRWVAPFE5YZ4J", monthly: "EFX22KBXMS9WE" },
      openfda_drug_ndc:         { oneoff: "9KMX6PG63C9HQ", monthly: "2BYV8MKMKXYXJ" },
      fda_medical_devices:      { oneoff: "ASPXQJRL7ABT2", monthly: "SEGJVXVCHYJJ2" },
      fda_drug_recalls:         { oneoff: "LKRU9THR87A7N", monthly: "MN2RPK3F79MXS" },
      fda_food_recalls:         { oneoff: "TJCYGMQQGCPXL", monthly: "BM2N9FL3Y4DVE" },
      arxiv_ai_research:        { oneoff: "U29A4KX95BENJ", monthly: "" },
      wikipedia_entity_trends:  { oneoff: "W6QFMP63GJ8R6", monthly: "" }
    };
window.dataforgePayUrl = function (datasetId, plan) {
  var e = (window.DATAFORGE_PAYPAL || {})[datasetId];
  var id = e && e[plan];
  return id ? "https://www.paypal.com/ncp/payment/" + id : null;
};
