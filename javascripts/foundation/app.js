(function ($) {  
	
	// Layout Fix
	initLayoutFix();
	
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
		animation: 'fade', // fade, horizontal-slide, vertical-slide, horizontal-push
		animationSpeed: 1000, // how fast animtions are
		timer: true, // true or false to have the timer
		resetTimerOnClick: false, // true resets the timer instead of pausing slideshow progress
		advanceSpeed: 19000, // if timer is enabled, time between transitions 
		pauseOnHover: false, // if you hover pauses the slider
		startClockOnMouseOut: false, // if clock should start on MouseOut
		startClockOnMouseOutAfter: 1000, // how long after MouseOut should the timer start again
		directionalNav: false, // manual advancing directional navs
		captions: false, // do you want captions?
		captionAnimation: 'fade', // fade, slideOpen, none
		captionAnimationSpeed: 800, // if so how quickly should they animate in
		bullets: false, // true or false to activate the bullet navigation
		bulletThumbs: false, // thumbnails for the bullets
		bulletThumbLocation: '', // location from this file where thumbs will be
		afterSlideChange: function(){}, // empty function 
		fluid: true // or set a aspect ratio for content slides (ex: '4x3')
	});
	
	// Fixed Nav
	var productHeight = $('#product').outerHeight();
	var navHeight = $('#product').outerHeight();
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(window).height()){
	        $('.nav').addClass('fixed').css('top','0');
	        $('#content').css('padding-top', '52px');
        } else {
            $('.nav').removeClass('fixed');
            $('#content').css('padding-top','0');
        }
    });
    
    // Scroll
    $('#product, .nav').localScroll({
		offset: -52
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
		$(this).next().slideToggle();
    });	
	
	// C’est Fin!
	
})(jQuery);
