/**
 * Plugin: jquery-stock
 * 
 * Version: 1.0 Milos Vnucko
 * (c) Copyright 2013 Claromentis
 * 
 * Description: jQuery stock plugin
 * 
 * History:
 * 1.0 Plugin Created
 **/
(function($){

	$.fn.stock = function(codes, options) {	
		// Set plugin defaults
		var defaults = {
			showerror: true
		}; 

		$t = this;

		var options = $.extend(defaults, options);
		if (!$t.hasClass('stock-plugin')) $t.addClass('stock-plugin');

		// Check and append codes
		if (!$.isArray(codes)) return false;

		var count = codes.length;
		if (count > 10) count = 10;

		var code_query = '';
		for (var i = 0; i < count; i++) {
			
			if (code_query != '') {
				code_query += ',';
			}
			code_query += "'"+ codes[i] + "'";
		}

		// Cache results for an hour to prevent overuse
		now = new Date();
		
		//Create Yahoo Stock Query
		var query = "select * from yahoo.finance.quotes where symbol in ("+ code_query +")";
		var api = 'http://query.yahooapis.com/v1/public/yql?q='+ encodeURIComponent(query) +'&rnd='+ now.getFullYear() + now.getMonth() + now.getDay() + now.getHours() +'&format=json&diagnostics=true&env=http://datatables.org/alltables.env&callback='

		// Send request
		$.ajax({
			type: 'GET',
			url: api,
			dataType: 'json',
			success: function(data) {
				if (data.query) {
					if (data.query.results.quote.length > 0 ) {
						var result = data.query.results.quote.length;
						for (var i = 0; i < result; i++) {
							// Create stock item
							_process($t, data.query.results.quote[i], options);
						}
					} else {
						// Single location only
						_process($t, data.query.results.quote, options);
					}
				} else {
					if (options.showerror) $t.html('<p>Stock information unavailable</p>');
				}
			},
			error: function(data) {
				if (options.showerror) $t.html('<p>Stock request failed</p>');
			}
		});

		// Function to each stock item
		var _process = function($t, result, options) {

			var pc_class = 'minus';
			if(result.Change > 0)
				pc_class = 'plus';

			var html = "";
			html += '<div class="stockItem stock-'+ result.symbol+'">';
				html += '<label>'+ result.Name +'</label>';
				html +=	'<div class="curr-price">'+result.LastTradePriceOnly+'</div>';
				html +=	'<div class="change '+pc_class+'">'+result.Change+'</div>';
				html +=	'<div class="percent-change '+pc_class+'">(<span class="percent-change">'+result.PercentChange+'</span>)</div>';
			html += '</div>';

			$t.append(html);
		};

	};
})(jQuery);