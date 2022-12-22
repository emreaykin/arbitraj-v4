$(document).ready(function () {
   

    var arbitrageTable = $('#arbitrage-table').DataTable( {
      bPaginate: false,
      searching: false,
      bInfo: false,
    } ); 
    var arbitrageDetailTable= $('#arbitrage-detail-table').DataTable( {
        bPaginate: false,
        searching: false,
        bInfo: false,
      } ); 
      var exchangeOneAsksTable= $('#exchange-one-asks-table').DataTable( {
        bPaginate: false,
        searching: false,
        bInfo: false,
      } ); 
      var exchangeOneBidsTable= $('#exchange-one-bids-table').DataTable( {
        bPaginate: false,
        searching: false,
        bInfo: false,
      } ); 
     
    for(let i=0;i<30;i++){
        arbitrageTable.row.add(["BTC","Binance","0.00123",100000000,"Huobi","0.00135",100000,30]).draw(false);
    }
    arbitrageTable.row.add(["BTC","Binance","0.00123",100000,"Huobi","0.00135",100000,34]).draw(false);

    exchangeOneAsksTable.row.add(["Binance","0.00123",100000]).draw(false);
    exchangeOneBidsTable.row.add(["Binance","0.00123",100000]).draw(false);
    arbitrageDetailTable.row.add(["BTC","Binance","0.00123",100000,"Huobi","0.00135",100000,34]).draw(false);
   

});