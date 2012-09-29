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
		var viewport_height = $(viewport).height();
		var product_height = $(product).height();
		function fixHeight() {
			product.css({
				height: viewport_height
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
    
    // Scroll Product
	$('#product').localScroll({
		offset: -50
	});
	
	// Scroll Nav
	$('#nav').localScroll({
		offset: -62
	});
	
	// Nav Highlights
/*
	$('#nav li a').click(function(){
		loc = $(this).attr('href');
		$('#nav a.current').removeClass('current');
		$(loc).find('a[href="' + loc + '"]').addClass('current');
	});
*/
	
	// More
	$('.moar').hide();
	$('.more').click(function(){
		$(this).next().slideToggle();
/* 		$(this).html('Less &laquo;').addClass('less'); */
    });	
	
	// C’est Fin!
	
})(jQuery);
