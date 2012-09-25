(function ($) {  

	$(function(){
	
		$(document).foundationAlerts();
		$(document).foundationButtons();
		$(document).foundationAccordion();
		$(document).foundationNavigation();
		$(document).foundationCustomForms();
		$(document).foundationMediaQueryViewer();
		$(document).foundationTabs({callback:$.foundation.customForms.appendCustomMarkup});
		
		$(document).tooltips();
		$('input, textarea').placeholder();
		
		// IE8 Support for .block-grids
		// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
		// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
		// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
		// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
		
		initLayoutFix();
    
	});
  
	// page init
/* 	$(function(){ */
/* 		initLayoutFix(); */
/* 		initLightbox(); */
/* 		initSlideAnchors(); */
/* 		initCarousel(); */
/* 	}); */
	
	
	function initLayoutFix() {
		var win = $(window);
		var product = $('.product');
		function fixHeight() {
			product.css({
				height: Math.max(win.height(), 400) - parseInt(product.css('paddingBottom')) - parseInt(product.css('paddingTop'))});
		}
		win.bind('load resize', fixHeight);
	}
  
})(jQuery);
