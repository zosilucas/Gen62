( function($) {
  'use strict';



  	/*-------------------------------------------------------------------------------
	  Detect mobile device 
	-------------------------------------------------------------------------------*/


	
	var mobileDevice = false; 

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	  	$('html').addClass('mobile');
	  	mobileDevice = true;
	}

	else{
		$('html').addClass('no-mobile');
		mobileDevice = false;
	}



    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).on('load', function(){

		var wow = new WOW({
		    offset: 150,          
		    mobile: false
		  }
		);
		
		wow.init();
	});

	var navbar=$('.js-navbar:not(.navbar-fixed)');



	/*-------------------------------------------------------------------------------
	  Loader
	-------------------------------------------------------------------------------*/



	$(".animsition").animsition({
	   inClass: 'fade-in',
       outClass: 'fade-out',
	   inDuration: 1000,
	   outDuration: 700,
	   linkElement: '.menu-list a',
	   // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
	   loading:true,
	   loadingParentElement: 'body', //animsition wrapper element
	   loadingClass: 'spinner',
	   loadingInner: '<div class="double-bounce1"></div><div class="double-bounce2"></div>', // e.g '<img src="loading.svg" />'
	   timeout: false,
	   timeoutCountdown:5000,
	   onLoadEvent: true,
	   browser: [ 'animation-duration', '-webkit-animation-duration'],
	   // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
	   // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
	   overlay : false,
	   overlayClass : 'animsition-overlay-slide',
	   overlayParentElement : 'body',
	   transition: function(url){ window.location.href = url; }
	});



	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/



	navbar.affix({
	  offset: {
	    top: 50
	  }
	});


	navbar.on('affix.bs.affix', function() {
		if (!navbar.hasClass('affix')){
			navbar.addClass('animated slideInDown');
		}
	});

	navbar.on('affixed-top.bs.affix', function() {
	  	navbar.removeClass('animated slideInDown');
	  	
	});

	$('.nav-mobile-list li a[href="#"]').on('click',function(){
		$(this).closest('li').toggleClass('current');
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/



	$('.navbar-toggle').on('click',function(){
		$('body').removeClass('menu-is-closed').addClass('menu-is-opened');
	});

	$('.close-menu, .click-capture').on('click', function(){
		$('body').removeClass('menu-is-opened').addClass('menu-is-closed');
		$('.menu-list ul').slideUp(300);
	});

	var dropToggle =$('.menu-list > li').has('ul').children('a');


	dropToggle.on('click',function(){
		dropToggle.not(this).closest('li').find('ul').slideUp(200);
		$(this).closest('li').children('ul').slideToggle(200);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top - navbar.outerHeight())
            }, 1000);
            return false;
        }
    });


    
    /*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/



	$(window).stellar({
	  	responsive: true,
	  	horizontalScrolling: false,
	  	hideDistantElements: false,
	  	horizontalOffset: 0,
	  	verticalOffset: 0,
	});



	/*-------------------------------------------------------------------------------
	  Projects grid
	-------------------------------------------------------------------------------*/



	function columnGrid(){
	  $('.js-grid-items').each(function(){
		  var colWrap =$(this).width(); 
		  var colItem = Math.floor(colWrap / 390); 
		  var colFixedItem = Math.floor(colWrap / colItem);
		  $(this).find('.js-grid-item').css({ 'width' : colWrap});
		  $(this).find('.js-grid-item').css({ 'width' : colFixedItem});
	  });
	}

	columnGrid();

	$(window).resize(function(){
		columnGrid();
	});



	/*-------------------------------------------------------------------------------
	  Hide project info
	-------------------------------------------------------------------------------*/



	$('.project-detail-control').on('click', function(){
		$(this).toggleClass('active');
		$('.project-detail-content').slideToggle(200);
	});



	/*-------------------------------------------------------------------------------
	  Owl Carousel
	-------------------------------------------------------------------------------*/


	if ($('.owl-carousel').length > 0){



		/*-------------------------------------------------------------------------------
		  Partners Carousel
		-------------------------------------------------------------------------------*/



		$(".js-partners-carousel").owlCarousel({
			items : 5,
		    itemsDesktop : [1199,3],
		    itemsDesktopSmall : [980,2],
		    itemsTablet: [768,1],
		    itemsMobile : [479,1],
		    pagination:true,
		 	autoHeight : true
		});



		/*-------------------------------------------------------------------------------
		  Clients Carousel
		-------------------------------------------------------------------------------*/



		$(".js-client-carousel").owlCarousel({
			items : 2,
		    itemsDesktop : [1199,1],
		    itemsDesktopSmall : [980,1],
		    itemsTablet: [768,1],
		    itemsMobile : [479,1], 
		    pagination:true,
		 	autoHeight : true

		});

		/*-------------------------------------------------------------------------------
		  Project Carousel
		-------------------------------------------------------------------------------*/



	   $('.project-carousel').owlCarousel({
		    dots:true,
		    margin:30,
		    smartSpeed:250,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:2
		        },
		        1200:{
		            items:3
		        },
		        1600:{
		            items:4
		        }
		    }
		});


		/*-------------------------------------------------------------------------------
		  Client Carousel
		-------------------------------------------------------------------------------*/



	    $('.client-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    nav:true,
		    navText:[],
		    dots:false,
		    autoHeight: true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:1
		        },
		        768:{
		            items:1
		        },
		        992:{
		        	items:2
		        },
		        1200:{
		            items:2
		        }
		    }
		});



		/*-------------------------------------------------------------------------------
		  Partner Carousel
		-------------------------------------------------------------------------------*/


		  
	   $('.partner-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    dots:true,
		    responsiveRefreshRate:0,
		    responsive:{
		        0:{
		            items:2
		        },
		        768:{
		            items:3
		        },
		        992:{
		        	items:4
		        },
		        1200:{
		        	items:5
		        }
		    }
		});



	    /*-------------------------------------------------------------------------------
		  News Carousel
		-------------------------------------------------------------------------------*/



	   $('.news-carousel').owlCarousel({
		    margin:30,
		    smartSpeed:250,
		    dots:true,
		    responsiveRefreshRate:0,
		    responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:2,
		            
		        },
		        1280:{
		            items:3
		        }
		    }
		});

	   $(".review-carousel").owlCarousel({
			responsive:{
		       0:{
		            items:1
		        },
		        720:{
		            items:1,
		            
		        },
		        1280:{
		            items:1
		        }
		    },
		    responsiveRefreshRate:0,
			nav:true,
			navText:[],
			animateIn: 'fadeIn',
		 	dots:false
		});

	}


	/*-------------------------------------------------------------------------------
	  Projects masonry
	-------------------------------------------------------------------------------*/



	 var $container=$('.js-isotope').each(function() {		
		var $container = $(this);
		$container.imagesLoaded( function(){
			$container.isotope({		 
				itemSelector: '.js-isotope-item',
				percentPosition: true,
				layoutMode: 'masonry',	
				masonry: {
				  columnWidth: '.js-isotope-item'
				}	
			});	
		});
    }); 



	/*-------------------------------------------------------------------------------
	  Project Sly Carousel
	-------------------------------------------------------------------------------*/



	var $frame  = $('.sly');
		var $slidee = $frame.children('ul').eq(0);
		var $wrap   = $frame.parent();

		if ($frame.length > 0){
			$frame.sly({
				horizontal: 1,
				itemNav: 'basic',
				smart: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				startAt: 0,
				scrollBar: $wrap.find('.scrollbar'),
				scrollBy: 0,
				activatePageOn: 'click',
				speed: 1000,
				elasticBounds: 2,
				dragHandle: 2,
				dynamicHandle: 1,
				clickBar: 0,

				// Buttons
				prevPage: $wrap.find('.prev'),
				nextPage: $wrap.find('.next')
			});

			$(window).resize(function(){
				$frame.sly('reload');
			});
		}



	/*-------------------------------------------------------------------------------
	  Filter
	-------------------------------------------------------------------------------*/



	$('.js-filter li a').on('click', function() {
		$('.js-filter .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.js-isotope').isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				queue: false
			}
		});
		return false;
	});



   /*-------------------------------------------------------------------------------
	  Filter Carousel 
	-------------------------------------------------------------------------------*/



	$('.js-filter-carousel li a').on('click', function() {
		$('.js-filter-carousel .active').removeClass('active');
		$(this).closest('li').addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-carousel').fadeOut(300);
		$('.project-carousel').fadeIn(300);
		setTimeout(function(){
			$('.project-carousel .owl-item').hide();
			$(selector).closest('.project-carousel .owl-item').show();
		}, 300);
		return false;
	});



	/*-------------------------------------------------------------------------------
	  Full screen sections 
	-------------------------------------------------------------------------------*/



    if ($('.pagepiling').length > 0){

      	$('.pagepiling').pagepiling({
    		scrollingSpeed: 280,
		    loopBottom:true,
		   	afterLoad: function(anchorLink, index){
				if(index == 1 || index == 3 || index == 5){  // 1 ,3 ,5 - Sections with white bacgkrounds
	               $('.navbar').addClass('navbar-white');
	               $('#pp-nav, .lang-bottom, .copy-bottom').addClass('white');
	            }
	            else{
	            	$('.navbar').removeClass('navbar-white');
	            	$('#pp-nav, .lang-bottom, .copy-bottom').removeClass('white');
	            }
	            if ( $('.pp-section.active').scrollTop() > 0 ){
	            	$('.navbar').removeClass('navbar-white');
	            }
	            
  			},
  			onLeave: function(){
  				$('.section.active .bg-changer .section-bg').removeClass('active').eq(0).addClass('active');
  			}
		});



		/*-------------------------------------------------------------------------------
		   Scroll into sections 
		/-------------------------------------------------------------------------------*/



		$('.pp-scrollable').on('scroll', function () {
    		var scrollTop =$(this).scrollTop();
    		if (scrollTop > 0 ) {
    			$('.navbar-2').removeClass('navbar-white');
    		}
    		else{
    			$('.navbar-2').addClass('navbar-white');
    		}
		});



		/*-------------------------------------------------------------------------------
		   Scroller navigation
		/-------------------------------------------------------------------------------*/



		$('#pp-nav').remove().appendTo('.animsition').prepend('<div class="pp-nav-up icon-chevron-up"></div>').append('<div class="pp-nav-down icon-chevron-down"></div>').addClass('white right-boxed hidden-xs');

		$('.pp-nav-up').on('click', function(){
			$.fn.pagepiling.moveSectionUp();
		});

		$('.pp-nav-down').on('click', function(){
			$.fn.pagepiling.moveSectionDown();
		});
    } 



    /*-------------------------------------------------------------------------------
	  Change bacgkround on project section
	-------------------------------------------------------------------------------*/



    $('.project-box').on('mouseover',function(){
    	var index = $('.project-box').index(this);
    	$('.bg-changer .section-bg').removeClass('active').eq(index).addClass('active');
    });



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/



	if ($('.js-form').length) {
		$('.js-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			    submitHandler: function(form){
		        	$.ajax({
			            type: "POST",
			            url:"mail.php",
			            data: $(form).serialize(),
			            success: function() {
		                	$('.success-message').show();
		                },

		                error: function(){
			                $('.error-message').show();
			            }
			        });
			    }
			});
		});
	}

})(jQuery);
