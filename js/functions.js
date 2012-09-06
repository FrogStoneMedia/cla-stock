//Stock Price

jQuery(document).ready(function(){

// Facebook Stock information

    getStockFigures("FB",".stock-fb .curr-price","l");

    getStockFigures("FB",".stock-fb .diff","c");
    
    getStockFigures("FB",".stock-fb .percent-change","cp");

    //NASDAQ Stock information

    getStockFigures(".IXIC",".stock-nasdaq .curr-price","l");

    getStockFigures(".IXIC",".stock-nasdaq .diff","c");

    getStockFigures(".IXIC",".stock-nasdaq .percent-change","cp");


    //DOW Jones Stock Information

    getStockFigures(".DJI",".stock-dow .curr-price","l");

    getStockFigures(".DJI",".stock-dow .diff","c");

    getStockFigures(".DJI",".stock-dow .percent-change","cp");
    

    //S&P Stock information

    getStockFigures(".INX",".stock-sp .curr-price","l");

    getStockFigures(".INX",".stock-sp .diff","c");

    getStockFigures(".INX",".stock-sp .percent-change","cp");

});

function getStockFigures(feed, target, figure){

  jQuery.ajax({
      type: "get",
      dataType: "jsonp",
      url: "https://www.google.com/finance/info?infotype=infoquoteall&q="+feed,
      success: function(data) {
      injectStockPrice(data, target, figure);
    }
  });

};

function injectStockPrice(data, target, figure) {
     stockPrice = data[0][figure];
     var fullTarget = jQuery('.stock-price').find(target);
     var activity = stockPrice.split("")

     jQuery(fullTarget).html(stockPrice);

     if(activity[0] === "-") {

      jQuery(fullTarget).addClass("minus").parent().removeClass("plus");

     } else if (activity[0] === "+") {

      jQuery(fullTarget).addClass("plus");

     }

};