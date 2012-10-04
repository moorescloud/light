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
	
		
	// Fixed Nav
	var productHeight = $('#product').outerHeight();
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
		$('.mobi').fadeIn();
	});
	
	$('.mobiless, .mobi a').click(function(){
		$('.mobimore').show();
		$('.mobiless').hide();
		$('.mobi').slideUp();
	});
	
	
	// Pop & Popper & Peeper
/*
	$('.pop').hide();
	$('.peeper').hide();
	$('.popper').click(function() {
		$('.popper').hide();
		$('.peeper').show();
		$('#content').fadeTo(250, 0);
		$('.pop').fadeTo(250, 1);
	});
	$('.peeper').click(function() {
		$('.popper').show();
		$('.peeper').hide();
		$('#content').fadeTo(250, 1);
		$('.pop').fadeTo(250, 0);
	});
	
	// Pop Links
	$('.pop a').click(function() {
		$('.popper').show();
		$('.peeper').hide();
		$('#content').fadeTo(250, 1);
		$('.pop').fadeTo(250, 0);
	})
*/
	
	// Modal
/*
	$('#navpop').click(function() {
		$('#navmodal').reveal({
			animation: 'fadeAndPop',
			animationSpeed: 300,
			closeOnBackgroundClick: false,
			dismissModalClass: 'close-reveal-modal'
		});
		$('#content').css('opacity', '0');
	});
    
	$('.close-reveal-modal, .reveal-modal-bg').click(function() {
		$('#content').css('opacity', '1');  
	});
*/
    
    
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
    });
    
    
    // Slider
    $('#slider').hide();
	$('#pop').click(function(){
		$('#slider').slideToggle();
    });
	
	
	// C’est Fin!
	
})(jQuery);
