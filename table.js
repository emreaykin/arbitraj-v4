var arbitrageTable = $("#arbitrage-table").DataTable({
  bPaginate: false,
  searching: false,
  bInfo: false,
});
var arbitrageDetailTable = $("#arbitrage-detail-table").DataTable({
  bPaginate: false,
  searching: false,
  bInfo: false,
  ordering: false,
});
var exchangeOneBookTable = $("#exchange-one-book-table").DataTable({
  bPaginate: false,
  searching: false,
  bInfo: false,
  ordering: false,
});
var exchangeTwoBookTable = $("#exchange-two-book-table").DataTable({
  bPaginate: false,
  searching: false,
  bInfo: false,
  ordering: false,
});
var exchangeOneInformationTable = $(
  "#exchange-one-information-table"
).DataTable({
  lengthChange: false,
  lengthMenu: [[7]],
  searching: false,
  bInfo: false,
});

var exchangeTwoInformationTable = $(
  "#exchange-two-information-table"
).DataTable({
  lengthChange: false,
  lengthMenu: [[7]],

  searching: false,
  bInfo: false,
});

for (let i = 0; i < 30; i++) {
  arbitrageTable.row
    .add([
      "BTC",
      "Binance",
      "0.00123",
      100000000,
      "Huobi",
      "0.00135",
      100000,
      30,
    ])
    .draw(false);
}
arbitrageTable.row
  .add(["BTC", "Binance", "0.00123", 100000, "Huobi", "0.00135", 100000, 34])
  .draw(false);

arbitrageDetailTable.row
  .add(["BTC", "Binance", "0.00123", 100000, "Huobi", "0.00135", 100000, 34])
  .draw(false);

for (let i = 0; i < 8; i++) {
  exchangeOneBookTable.row
    .add([0.00123, 10000, 5023, 0.00123, 10000, 5023])
    .draw(false);
}

for (let i = 0; i < 8; i++) {
  exchangeTwoBookTable.row
    .add([0.00123, 10000, 5023, 0.00123, 10000, 5023])
    .draw(false);
}

for (let i = 0; i < 29; i++) {
  exchangeOneInformationTable.row
    .add(["<button>İptal</button>", "12:52", 0.002564, 5023, 4212, 5000])
    .draw(false);
}
exchangeOneInformationTable.row
  .add(["<button>İptal</button>", "12:52", 0.0025454564, 5023, 4212, 5000])
  .draw(false);
for (let i = 0; i < 29; i++) {
  exchangeTwoInformationTable.row
    .add(["<button>İptal</button>", "12:52", 0.002564, 5023, 4212, 5000])
    .draw(false);
}
