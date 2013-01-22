Stock Price
===============

[![](https://raw.github.com/Claromentis/stock/master/screenshot.png)](https://raw.github.com/Claromentis/stock/master/screenshot.png)




To embed within a publish page, use:
```javascript
	<script type="text/javascript">
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
	</script>
```

For home page companente use:
```html
	<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<head>

	<meta charset="utf-8">
	<title>Stock</title>
	<meta name="description" content="Clocks plugin">
	<meta name="viewport" content="width=device-width">

	<style type="text/css">

		/* 
		
		- Basic styles for Stock - change as needed

		- Need to keep some sort of style for posotive and negative stock (.plus and .minus classes)

		 */

		.stock-price {
			min-height: 187px
		}

		.stock-price label {
			float: left;
			width: 80px;
			margin-left: 5px;
		}

		.stock-price span {
			margin-right: 10px;
		}

		.stock-price .percent-change {
			margin-right: 0;
		}

		.stock-price .minus {
			font-weight: bold;
			color: #f00;
		}

		.stock-price .plus {
			font-weight: bold;
			color: #83bc21;
		}
		.stock-ccmp, .stock-ccmp label {
			font-size: 20px;
			line-height: 35px;
			font-weight: bold
		}

	</style>

</head>

<body>

	<header><h1>Stock!</h1></header>

		<div class="stock-price">
						
			<p class="stock-fb">
				<label>Facebook</label>
				<span class="curr-price">xxx</span>
				<span class="diff"></span>
				<span class="pc plus">(<span class="percent-change">N/A</span>%)</span>
			</p>

			<p class="stock-dow">
				<label>Dow Jones</label>
				<span class="curr-price">xxx</span>
				<span class="diff"></span>
				<span class="pc plus">(<span class="percent-change">xxx</span>%)</span>
			</p>

			<p class="stock-nasdaq">
				<label>NASDAQ</label>
				<span class="curr-price">xxx</span>
				<span class="diff"></span>
				<span class="pc plus">(<span class="percent-change">N/A</span>%)</span>
			</p>

			<p class="stock-sp">
				<label>S&amp;P</label>
				<span class="curr-price">xxx</span>
				<span class="diff"></span>
				<span class="pc plus">(<span class="percent-change">N/A</span>%)</span>
			</p>

		</div>

	<!-- jQuery is already included in core so you probably dont need to include this -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="js/functions.js"></script>

  
</body>
</html>
```