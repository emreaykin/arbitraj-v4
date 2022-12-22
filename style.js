
    $('#arbitrage-table').on( 'click', 'tr', function () {
        if ($(window).width()<1030) {
            var x= arbitrageTable.row( this ).index() ;
             var data = arbitrageTable.data()[x];
      
        for(let i=0;i<data.length;i++){
          arbitrageDetailTable.cell(0,i).data(data[i]);
          $('#one-exchange').show();
          $('#arbitrage-detail').show();
          $('#arbitrage-section').hide();
          $('#two-exchange').hide();
      
        }
        }
      } );

      $(window).on('resize', function() {
        if ($(window).width()>1029) {
            $('#one-exchange').show();
          $('#arbitrage-detail').show();
          $('#arbitrage-section').show();
          $('#two-exchange').show();
        }  
        if ($(window).width()<1030) {
            window.location.reload();
            $('#one-exchange').show();
            $('#arbitrage-detail').show();
            $('#arbitrage-section').hide();
            $('#two-exchange').hide();
        
        }
    });

    