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
    
	});
	
	// Product
	initLayoutFix();
	function initLayoutFix(){
		var viewport = $(window);
		var product = $('#product');
		var viewport_height = $(viewport).height();
		var product_height = $(product).height();
		function fixHeight(){
			product.css({
				height: viewport_height
			});
		}
		viewport.bind('load resize', fixHeight);
	}
	
	// Hot Shots
	$('#shots').orbit({
		animation: 'fade',
		animationSpeed: 1000,
		timer: true,
		advanceSpeed: 10000, 
		directionalNav: false
	});
	
	// Fixed Nav
	var productHeight = $('#product').outerHeight();
	// var navHeight = $('#product').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(window).height()){
	        $('.nav').addClass('fixed').css('top','0');
	        $('#content').css('padding-top', '54px');
        } else {
            $('.nav').removeClass('fixed');
            $('#content').css('padding-top','0');
        }
    });
    
    // Scroll
    $('#product').localScroll();
	
	$('.nav').localScroll({
		offset: -54
	});
	
	$('.less').localScroll({
		offset: -54
	});
	
	// Mobile Nav
	$('.mobimore').click(function(){
		$('.mobimore').hide();
		$('.mobiless').show();
		$('.mobi').slideDown();
	});
	$('.mobiless, .mobi a').click(function(){
		$('.mobimore').show();
		$('.mobiless').hide();
		$('.mobi').slideUp();
	});
	
	// Nav Highlights
	$('.nav a').click(function(){
		$('.nav a.current').removeClass('current');
		$(this).addClass('current');
	});
	
	// More & Moar
	$('.moar').hide();
	$('.more').click(function(){
		$(this).addClass('open').slideUp('slow').parent().parent().next().slideDown('slow');
    });
    $('.less').click(function(){
		$(this).parent().parent().fadeOut();
		$('.open').slideDown('slow').removeClass('open');
    });
    
    // Slip & Slide
    $('.slider').hide();
    $('.slip').click(function(){
		$(this).addClass('slid').slideUp('slow').next().slideDown('slow');
    });
    $('.slide').click(function(){
		$(this).parent().slideUp();
		$('.slid').slideDown('slow').removeClass('slid');
    });
    
	
	// C’est Fin!
	
})(jQuery);
