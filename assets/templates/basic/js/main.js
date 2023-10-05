(function ($) {
    "use strict";
	
	var auction = {

		/* ---------------------------------------------
		    ## Content Loading
		--------------------------------------------- */
		contentLoading: function() {
			$("body").imagesLoaded( function() {
				$('.preloader').delay(1000).fadeOut('slow');
				setTimeout(function() {
				    //After 2s, the no-scroll class of the body will be removed
				    $('body').removeClass('no-scroll');
					$("body").addClass("loading-done");
				}, 1000); //Here you can change preloader time
			});
		},	
        
        /* ---------------------------------------------
            ## Scroll top
        --------------------------------------------- */
        scroll_top: function () {
            $("body").append("<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fa fa-angle-double-up'></span></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop
                        .addClass('btn-show')
                        .removeClass('btn-hide');
                } else {
                    $scrolltop
                        .addClass('btn-hide')
                        .removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "normal");
                return false;
            });
        },
        
		/* ---------------------------------------------
            ## Mobile Menu
        --------------------------------------------- */
        mobile_menu: function () {
            var mobilesearch = $('.site-header .navigation-area .header-navigation-right').clone().appendTo('.mobile-menu');
            // mobile Menu
            //-------------------------------
            $('.site-navigation .mainmenu-area nav').meanmenu({
                meanMenuClose: "<i class='fas fa-times'></i>",
                meanMenuCloseSize: '18px',
                meanScreenWidth: '1199',
                meanExpandableChildren: true,
                meanMenuContainer: '.mobile-menu-area .mobile-menu'
            });
        },	
        /*-------------------------------------------
            ## Sticky Header
        --------------------------------------------- */
        sticky_header: function() {
            if ($('#sticky-header').length) {
                $('.site-header .site-navigation').clone().appendTo('#sticky-header');
                $(window).on('scroll', function() {
                    var w = $(window).width();
                    if (w > 1199) {
                        if ($(this).scrollTop() > 350) {
                            $('#sticky-header').slideDown(500);
                        } else {
                            $('#sticky-header').slideUp(500);
                        }
                    }
                });
            } 
        },

        /* ---------------------------------------------
            ## Search
        --------------------------------------------- */
        search: function () {
            $('.search-wrap .search-btn').on('click', function(){
                if($(this).siblings('.search-form').hasClass('active')){

                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).removeClass('active');
                }
                else{
                    $(this).siblings('.search-form').removeClass('active').slideUp();
                    $(this).siblings('.search-form').removeClass('active');
                    $(this).addClass('active');
                    $(this).siblings('.search-form').addClass('active').slideDown();
                }
            });
        },
        
        /*-------------------------------------------
            ## Initialize Plugin
        --------------------------------------------- */
        initialize_plugin: function () {
            //Faq
            $('.faq-wrapper .faq-title').on('click', function (e) {
                var element = $(this).parent('.faq-item');
                if (element.hasClass('open')) {
                    element.removeClass('open');
                    element.find('.faq-content').removeClass('open');
                    element.find('.faq-content').slideUp(300);
                } else {
                    element.addClass('open');
                    element.children('.faq-content').slideDown(300);
                    element.siblings('.faq-item').children('.faq-content').slideUp(300);
                    element.siblings('.faq-item').removeClass('open');
                    element.siblings('.faq-item').find('.faq-title').removeClass('open');
                    element.siblings('.faq-item').find('.faq-content').slideUp(300);
                }
            });

            // Header Info Mobile Script
            var w = $(window).width();
            if (w < 768) {
                $('.header-info-mobile').siblings('.info-menu').slideUp();
                $('.header-info-mobile').on('click', function(){
                    $(this).siblings('.info-menu').slideToggle();
                });
            }

            // Nice Select for select input type
            if ($('.select-custom').length) {
                $('.select-custom').niceSelect();
            }            
        },
        
        /* ---------------------------------------------
            ## Promo Numbers
         --------------------------------------------- */
        promo_numbers: function() {
            $(".fanfact-promo-numbers").each(function () {
                $(this).isInViewport(function(status) {
                    if (status === "entered") {
                        for( var i=0; i < document.querySelectorAll(".odometer").length; i++ ){
                            var el = document.querySelectorAll('.odometer')[i];
                            el.innerHTML = el.getAttribute("data-odometer-final");
                        }
                    }
                });
            });
        },

        /* ---------------------------------------------
            ## Brands Carousel
        --------------------------------------------- */
        brands_carousel: function() {
            if ($('.brands-carousel').length) {
                var items = 5;
                $('.brands-carousel').owlCarousel({
                    center: false,
                    items: items,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 30,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        481: {
                            items: 2
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 3
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Winner Carousel
		 --------------------------------------------- */
		winner_carousel: function() {
            var $winnerCarousel = $("#winner-carousel");
            if ($winnerCarousel.length) {
                var items = 5;
                $winnerCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 20,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        768: {
                            items: 3
                        },
                        992: {
                            items: 4
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
        /* ---------------------------------------------
		    ## Testimonial Carousel
		 --------------------------------------------- */
		testimonial_carousel: function() {
            var $testimonialCarousel = $("#testimonail-carousel");
            if ($testimonialCarousel.length) {
                var items = 3;
                $testimonialCarousel.owlCarousel({
                    center: false,
                    items: 2,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: false,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: 2
                        }
                    }
                });  
            }
            $('.testimonial-block .btn-links-area .btn-prev').on('click', function() {
                $testimonialCarousel.trigger('prev.owl.carousel');
            });
            $('.testimonial-block .btn-links-area .btn-next').on('click', function() {
                $testimonialCarousel.trigger('next.owl.carousel');
            });
        },

        /* ---------------------------------------------
		    ## Upcoming Auction
		 --------------------------------------------- */
		upcoming_auction: function() {
            var $upcomingAuctionCarousel = $(".upcoming-auction-carousel");
            if ($upcomingAuctionCarousel.length) {
                var items = 3;
                $upcomingAuctionCarousel.owlCarousel({
                    center: false,
                    items: items,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    smartSpeed: 700,
                    margin: 0,
                    singleItem: false,
                    loop: true,
                    nav: false,
                    dots: true,
                    responsive: {
                        280: {
                            items: 1
                        },
                        500: {
                            items: 1
                        },
                        768: {
                            items: 2
                        },
                        992: {
                            items: 2
                        },
                        1200: {
                            items: items
                        }
                    }
                });  
            }
        },
        
		/* ---------------------------------------------
		    ## Single Product
		--------------------------------------------- */
		singleProduct: function() {
            $('.single-product-slider').owlCarousel({
                autoplay: true,
                loop: true,
                nav: true,
                autoplay: false,
                autoplayTimeout: 8000,
                items: 4,
                margin:10,
                dots:false,
                navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    320:{
                        items:2,
                    },
                    575:{
                        items:3,
                    },
                    768:{
                        items:4,
                    },
                    992:{
                        items:3,
                    },
                    1200:{
                        items:4,
                    },
                }
            }); 

            $('.active-gallery').on('click', function() {
                var activeItem = $(this).find("img").attr('src');
                $('#product-main-thumb').find("img").attr('src', activeItem);
            });
		},	
		/* ---------------------------------------------
		    ## Sidebar Script
		--------------------------------------------- */
		sidebarScript: function() {
            var w = $(window).width();
            var MarginTop = (w > 1199) ? 95 : 0;
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.blog-page-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.privacy-policy-block',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
			if ($('.sidebar-items').length) {
                $('.sidebar-items').theiaStickySidebar({
                    'containerSelector': '.auction-product-categories',
                    'additionalMarginTop': MarginTop,
                    'minWidth': 992,
                });
            } 
		},	
		/* ---------------------------------------------
		 function initializ
		 --------------------------------------------- */
		initializ: function() {
			auction.scroll_top();
			auction.mobile_menu();
			auction.sticky_header();
			auction.search();
			auction.initialize_plugin();
            auction.promo_numbers();
            auction.brands_carousel();
            auction.winner_carousel();
            auction.testimonial_carousel();
            auction.upcoming_auction();
            auction.singleProduct();
            auction.sidebarScript();
		}
	};
	/* ---------------------------------------------
	 Document ready function
	 --------------------------------------------- */
	$(function() {
		auction.initializ();
	});

    function bgControl() {
        var prevBg = $('.win-steps-block').prev();
        var thisBg = $('.win-steps-block');
        if(prevBg.hasClass('bg-white-smoke')){
        }else {
            thisBg.addClass('bg-white-smoke');
        }
        var nextBg = $('.page-title-area').next();
        if (nextBg.hasClass('bg-white-smoke')) {
            nextBg.removeClass('bg-white-smoke')
        }
    }
	$(window).on('load', function() {
		auction.contentLoading();
        bgControl();
	});
})(jQuery);