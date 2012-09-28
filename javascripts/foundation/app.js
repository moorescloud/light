(function ($) {  
	
	// Foundation & Startup
	$(function(){
	
		$(document).foundationAlerts();
		$(document).foundationButtons();
		$(document).foundationAccordion();
		$(document).foundationNavigation();
		$(document).foundationCustomForms();
		$(document).foundationMediaQueryViewer();
		$(document).foundationTabs({
			callback:$.foundation.customForms.appendCustomMarkup
		});
		$(document).tooltips();
		$('input, textarea').placeholder();
		
		// IE8 Support for .block-grids
		// $('.block-grid.two-up>li:nth-child(2n+1)').css({clear: 'both'});
		// $('.block-grid.three-up>li:nth-child(3n+1)').css({clear: 'both'});
		// $('.block-grid.four-up>li:nth-child(4n+1)').css({clear: 'both'});
		// $('.block-grid.five-up>li:nth-child(5n+1)').css({clear: 'both'});
		
		initLayoutFix();
    
	});
	
	// Product
	function initLayoutFix() {
		var viewport = $(window);
		var product = $('#product');
		var haight = $(window).height();
		function fixHeight() {
			product.css({
				height: haight
/* 				height: Math.max(viewport.height(), 400) - parseInt(product.css('paddingBottom')) - parseInt(product.css('paddingTop')) */
				});
		}
		viewport.bind('load resize', fixHeight);
	}
		
	// Nav Fix
	var productHeight = $('#product').outerHeight();
	var navHeight = $('#nav').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(window).height()){
	        $('#nav').addClass('fixed').css('top','0').next().css('padding-top', navHeight);
        } else {
            $('#nav').removeClass('fixed').next().css('padding-top','0');
        }
    });
    
	// Nav Scroll
	$('#nav, #product').localScroll({
		/* Fsck! Stop Nav Overlap */
	});
	
	// More
	$('.moar').hide();
	$('.more').click(function(){
		$(this).next().slideToggle();
/* 		$(this).html('Less &laquo;').addClass('less'); */
    });	
	
	// C’est Fin!
	
})(jQuery);
