(function($) {
  "use strict";

  jQuery(document).ready(function(){

    /*--------------------------
    1. Newsletter Popup
    ---------------------------*/
    setTimeout(function () {
      $('.popup_wrapper').css({
        "opacity": "1",
        "visibility": "visible"
      });
      $('.popup_off').on('click', function () {
        $(".popup_wrapper").fadeOut(500);
      })
    }, 2500);

    /*----------------------------
    2. Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
      meanScreenWidth: "991",
    });


    /*----------------------------
    3. Tooltip Activation
    ------------------------------ */
    $('.pro-actions a').tooltip({
      animated: 'fade',
      placement: 'top',
      container: 'body'
    });
    /*----------------------------
    4. Checkout Page Activation
    -----------------------------*/
    $('#showlogin').on('click', function () {
      $('#checkout-login').slideToggle();
    });
    $('#showcoupon').on('click', function () {
      $('#checkout_coupon').slideToggle();
    });
    $('#cbox').on('click', function () {
      $('#cbox_info').slideToggle();
    });
    $('#ship-box').on('click', function () {
      $('#ship-box-info').slideToggle();
    });

    /*----------------------------------------------------
    6. Our Product Activation
    -----------------------------------------------------*/
    $('.our-pro-active').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      
      smartSpeed: 1500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 500
        },
        480: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })

    /*-------------------------------
     7. Blog Activation
    ---------------------------------*/
    $('.blog-activation').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 700,
      margin: 30,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 500
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })

    /*----------------------------------------------------
    8. daily-deal-active Activation
    -----------------------------------------------------*/
    $('.daily-deal-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 300
        },
        480: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 2
        },
        1200: {
          items: 2
        }
      }
    })

    /*----------------------------------------------------
    9. single deal Activation
    -----------------------------------------------------*/
    $('.single-deal-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 1000,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      items:1,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 300
        },
        576: {
          items: 2
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    })

    /*----------------------------------------------------
    10. Tripple Pro Activation
    -----------------------------------------------------*/
    $('.tripple-pro-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 300
        },
        480: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })

    /*----------------------------------------------------
    11. daily-deal-active Activation
    -----------------------------------------------------*/
    $('.arrival-pro-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 300
        },
        480: {
          items: 2
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
    })

    /*----------------------------------------------------
    12. Categorie Products Activation
    -----------------------------------------------------*/
    $('.categorie-pro-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 300
        },
        480: {
          items: 2
        },
        768: {
          items: 3
        },
        992: {
          items: 3
        },
        1200: {
          items: 4
        }
      }
    })

    /*-------------------------------------
    13. Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
      loop: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 15,
      smartSpeed: 500,
      
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 3,
          autoplay: true,
        },
        768: {
          items: 3
        },
        1000: {
          items: 3
        }
      }
    })
    $('.thumb-menu a').on('click', function () {
      $('.thumb-menu a').removeClass('active');
    })

    /*----------------------------
    14. Testmonial Activation
    -----------------------------*/
    $(".testmonial-active").owlCarousel({
      loop: true,
      margin: 0,
      smartSpeed: 500,
      nav: false,
      
      autoplay: false,
      items: 1,
      dots: true,
    });

    /*----------------------------
    15. Recent Post Activation
    -----------------------------*/
    $(".recent-post-active").owlCarousel({
      loop: true,
      margin: 0,
      
      smartSpeed: 500,
      nav: false,
      autoplay: false,
      items: 1,
      dots: false,
    });

    /*----------------------------------------------------
    16. Categorie Slider Activation
    -----------------------------------------------------*/
    $('.categorie-slider-active').owlCarousel({
      loop: true,
      nav: true,
      
      dots: false,
      smartSpeed: 1500,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      margin: 20,
      responsive: {
        0: {
          items: 1,
          autoplay: true,
          smartSpeed: 500
        },
        480: {
          items: 2
        },
        768: {
          items: 2
        },
        992: {
          items: 1
        },
        1200: {
          items: 1
        }
      }
    })
    /*----------------------------
    18. ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
      scrollName: 'scrollUp', // Element ID
      topDistance: '550', // Distance from top before showing element (px)
      topSpeed: 1000, // Speed back to top (ms)
      animation: 'fade', // Fade, slide, none
      scrollSpeed: 900,
      animationInSpeed: 1000, // Animation in speed (ms)
      animationOutSpeed: 1000, // Animation out speed (ms)
      scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
      activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*----------------------------
    19. Sticky-Menu Activation
    ------------------------------ */
    $(window).on('scroll',function() {
      if ($(this).scrollTop() > 300) {
        $('.header-sticky').addClass("sticky");
      } else {
        $('.header-sticky').removeClass("sticky");
      }
    });

    //Lazayload js
    $("img.lazyload").lazyload();

    // Product grid color variant activation code. 

    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });
    
    //Single Product Dynamic Checkout Button
    $('#buy-now-check').on('click', function(){
      $(this).parent('.dynmiac_checkout--button').toggleClass('disabled');
    });

    $('.pro-qty').append('<a href="#" class="inc qty-btn">+</a>');
    $('.pro-qty').prepend('<a href="#" class= "dec qty-btn">-</a>');
    $('.qty-btn').on('click', function (e) {
      e.preventDefault();
      var $button = $(this);
      var oldValue = $button.parent().find('input').val();
      if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 1;
      } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find('input').val(newVal);
    });

    // Product grid color variant activation code. 
    
    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });

    /* single product activation */
    var $OwlMenuProduct = $('.menu_product_contain');
    if($OwlMenuProduct.length > 0){
      $OwlMenuProduct.owlCarousel({
        loop: true,
        nav: true,
        
        autoplay: false,
        margin: 0,
        autoplayTimeout: 8000,
        items: 1,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      });  
    };

    /*---background image---*/
    function dataBackgroundImage() {
      $('[data-bgimg]').each(function () {
        var bgImgUrl = $(this).data('bgimg');
        $(this).css({
          'background-image': 'url(' + bgImgUrl + ')', // + meaning concat
        });
      });
    }

    $(window).on('load', function () {
      dataBackgroundImage();
    });

    /*---stickey menu---*/
    $(window).on('scroll',function() {    
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".sticky-header").removeClass("sticky");
      }else{
        $(".sticky-header").addClass("sticky");
      }
    });

    /*---product column4 activation---*/
    $('.product_column4').on('changed.owl.carousel initialized.owl.carousel', function (event) {
      $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        992:{
          items:4,
        },

      }
    });

    /*---product column5 activation---*/
    $('.product_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
      $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 5,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        992:{
          items:4,
        },
        1200:{
          items:4,
        },
        1500:{
          items:5,
        },

      }
    });

    /*---product2 column5 activation---*/
    $('.product2_column5').on('changed.owl.carousel initialized.owl.carousel', function (event) {
      $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 5,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        992:{
          items:4,
        },
        1200:{
          items:4,
        },
        1300:{
          items:5,
        },

      }
    });


    /*---product column3 activation---*/
    $('.product_column3').on('changed.owl.carousel initialized.owl.carousel', function (event) {
      $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 3,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        576:{
          items:2,
        },
        768:{
          items:3,
        },
        992:{
          items:3,
        },
        1200:{
          items:3,
        },
      }
    });

    /*---brand container activation---*/
    $('.brand_container').on('changed.owl.carousel initialized.owl.carousel', function (event) {
      $(event.target).find('.owl-item').removeClass('last').eq(event.item.index + event.page.size - 1).addClass('last')}).owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 6,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        480:{
          items:3,
        },
        768:{
          items:4,
        },
        992:{
          items:5,
        },
        1200:{
          items:6,
        },

      }
    });
    /*---testimonial active activation---*/
    $('.testimonial-two').owlCarousel({
      autoplay: true,
      loop: true,
      nav: false,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 1,
      dots: true,

    })
    /*---blog thumb activation---*/
    $('.blog_thumb_active').owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 1,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
    /*---single product activation---*/
    $('.single-product-active').owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
      margin:15,
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
        992:{
          items:3,
        },
        1200:{
          items:4,
        },


      }
    });
    /*---product navactive activation---*/
    $('.product_navactive').owlCarousel({
      autoplay: true,
      loop: true,
      nav: true,
      autoplay: false,
      autoplayTimeout: 8000,
      items: 4,
      dots:false,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
      responsiveClass:true,
      responsive:{
        0:{
          items:1,
        },
        250:{
          items:2,
        },
        480:{
          items:3,
        },
        768:{
          items:4,
        },

      }
    });

    $('.modal').on('shown.bs.modal', function (e) {
      $('.product_navactive').resize();
    })

    $('.product_navactive a').on('click',function(e){
      e.preventDefault();

      var $href = $(this).attr('href');

      $('.product_navactive a').removeClass('active');
      $(this).addClass('active');

      $('.product-details-large .tab-pane').removeClass('active show');
      $('.product-details-large '+ $href ).addClass('active show');

    })
    /*--- Tooltip Active---*/
    $('.action_links ul li a,.add_to_cart a,.footer_social_link ul li a').tooltip({
      animated: 'fade',
      placement: 'top',
      container: 'body'
    });
    /*---  Accordion---*/
    $(".faequently-accordion").collapse({
      accordion:true,
      open: function() {
        this.slideDown(300);
      },
      close: function() {
        this.slideUp(300);
      }		
    });	  
    /*---  ScrollUp Active ---*/
    $.scrollUp({
      scrollText: '<i class="fa fa-angle-double-up"></i>',
      easingType: 'linear',
      scrollSpeed: 900,
      animation: 'fade'
    });   
    /*---categories slideToggle---*/
    $(".categories_title").on("click", function() {
      $(this).toggleClass('active');
      $('.categories_menu_toggle').slideToggle('medium');
    }); 

    /*---widget sub categories---*/
    $(".sub_categories1 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories1').slideToggle('medium');
    }); 

    /*---widget sub categories---*/
    $(".sub_categories2 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories2').slideToggle('medium');
    }); 

    /*---widget sub categories---*/
    $(".sub_categories3 > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_categories3').slideToggle('medium');
    }); 

    /*---addClass/removeClass categories---*/
    $("#cat_toggle.has-sub > a").on("click", function() {
      $(this).removeAttr('href');
      $(this).toggleClass('open').next('.categorie_sub').toggleClass('open');
      $(this).parents().siblings().find('#cat_toggle.has-sub > a').removeClass('open');
    });
    /*---shop grid activation---*/
    $('.shop_toolbar_btn > button').on('click', function (e) {

      e.preventDefault();

      $('.shop_toolbar_btn > button').removeClass('active');
      $(this).addClass('active');

      var parentsDiv = $('.shop_wrapper');
      var viewMode = $(this).data('role');
      parentsDiv.removeClass('grid_3 grid_4 grid_5 grid_list').addClass(viewMode);

      if(viewMode == 'grid_3'){
        parentsDiv.children().addClass('col-lg-4 col-md-4 col-sm-6').removeClass('col-lg-3 col-cust-5 col-12');

      }

      if(viewMode == 'grid_4'){
        parentsDiv.children().addClass('col-lg-3 col-md-4 col-sm-6').removeClass('col-lg-4 col-cust-5 col-12');
      }

      if(viewMode == 'grid_list'){
        parentsDiv.children().addClass('col-12').removeClass('col-lg-3 col-lg-4 col-md-4 col-sm-6 col-cust-5');
      }

    });
    
    

    
    
    
        function categorySubMenuToggle(){
        $('.categories_menu_toggle li.menu-item-has-children > a').on('click', function(){
        if($(window).width() < 991){
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        }
        });
        $('.categories_menu_toggle li.menu-item-has-children > a').append('<span class="expand"></span>');
    }
    categorySubMenuToggle();
    
    
    
    
    
    /*---search box slideToggle---*/
    $(".search_box > a").on("click", function() {
      $(this).toggleClass('active');
      $('.search_widget').slideToggle('medium');
    }); 
    /*---header account slideToggle---*/
    $(".header_account > a").on("click", function() {
      $(this).toggleClass('active');
      $('.dropdown_account').slideToggle('medium');
    }); 

    /*---slide toggle activation---*/
    $('.mini_cart_wrapper > a').on('click', function(event){
      if($(window).width() < 991){
        $('.mini_cart').slideToggle('medium');
      }
    }); 
    location.reload();
    /*---canvas menu activation---*/
    $('.canvas_open').on('click', function(){
      $('.offcanvas_menu_wrapper,.off_canvars_overlay').addClass('active')
    });

    $('.canvas_close,.off_canvars_overlay').on('click', function(){
      $('.offcanvas_menu_wrapper,.off_canvars_overlay').removeClass('active')
    });
    /*---Off Canvas Menu---*/
    var $offcanvasNav = $('.offcanvas_main_menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');

    $offcanvasNavSubMenu.slideUp();

    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
      var $this = $(this);
      if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
        e.preventDefault();
        if ($this.siblings('ul:visible').length){
          $this.siblings('ul').slideUp('slow');
        }else {
          $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
          $this.siblings('ul').slideDown('slow');
        }
      }
      if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        $this.parent().toggleClass('menu-open');
      }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        $this.toggleClass('menu-open');
      }
    });



  });

})(jQuery);
