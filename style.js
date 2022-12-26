$("#arbitrage-table").on("click", "tr", function () {
  if ($(window).width() < 1290) {
    var x = arbitrageTable.row(this).index();
    var data = arbitrageTable.data()[x];

    for (let i = 0; i < data.length; i++) {
      arbitrageDetailTable.cell(0, i).data(data[i]);
    }

    $("#one-exchange").show();
    $("#arbitrage-detail").show();
    $("#arbitrage-section").hide();
    $("#two-exchange").hide();

  
  }
});
$("#arbitrage-detail-table").on("click", "tr", function () {
  if ($(window).width() < 1290) {
    $("#one-exchange").hide();
    $("#arbitrage-detail").hide();
    $("#arbitrage-section").show();
    $("#two-exchange").hide();
   
  }
});

$(window).on("resize", function () {
  if ($(window).width() > 1290) {
    $("#one-exchange").show();
    $("#arbitrage-detail").show();
    $("#arbitrage-section").show();
    $("#two-exchange").show();
  }
  if ($(window).width() < 1290) {
    if (
      $("#one-exchange").css("display") === "none" &&
      $("#two-exchange").css("display") === "none"
    ) {
      $("#arbitrage-section").show();
      $(".container").css("height", "100%");
      $("#arbitrage-detail").hide();
    }
    if (
      $("#arbitrage-section").css("display") === "none" &&
      $("#two-exchange").css("display") === "none"
    ) {
      $("#one-exchange").show();
      $(".container").css("height", "94%");
    }
    if (
      $("#arbitrage-section").css("display") === "none" &&
      $("#one-exchange").css("display") === "none"
    ) {
      $("#two-exchange").show();
      $(".container").css("height", "94%");
    }
    if (
      $("#arbitrage-section").css("display") === "block" &&
      $("#one-exchange").css("display") === "block"
    ) {
      $("#one-exchange").hide();

    }
    if (
      $("#arbitrage-section").css("display") === "block" &&
      $("#two-exchange").css("display") === "block"
    ) {
      $("#two-exchange").hide();
    }
  }
});
