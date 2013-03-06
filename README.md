Stock Price
===============

[![](https://raw.github.com/Claromentis/cla-stock/master/screenshot.png)](https://raw.github.com/Claromentis/cla-stock/master/screenshot.png)

Search for your stock code here: <a href="http://www.google.co.uk/finance">http://www.google.co.uk/finance</a>
 
Your stock code will be in brackets next to the company name.

Include the javascript and call as below, including the following arguements:

- Stock Code
- Target Element
- Finance object property

```javascript

	// Facebook Stock information
    getStockFigures("FB",".stock-fb .curr-price","l");

```
The javaScript above will insert the current price (l) for Facebook (FB) into the element below:

```html
								
	<p class="stock-fb">
		<label>Facebook</label>
		<span class="curr-price">xxx</span>
	</p>

```

Enjoy!