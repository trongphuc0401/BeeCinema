
'use strict';

(function ($) {
 /*------------------
        Menu Toggle
    --------------------*/
let menuToggle = document.querySelector('.menuTogge');
let user_nav = document.querySelector('.user-nav');

menuToggle.onclick = function(){
    user_nav.classList.toggle('active');
}

/*------------------
        Preloader
    --------------------*/
    $(window).on('load', function (){
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.filter__gallery').length > 0) {
            var containerEl = document.querySelector('.filter__gallery');
            var mixer = mixitup(containerEl);
        }
    });
 /*------------------
       Auto slider
     --------------------*/
$(document).ready(function(){
    $('.image-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      isFinite: true,
      arrows: true,
      draggable: false,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      dots:true,
    });
  });
/*------------------
        Slider-section 
    --------------------*/
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
 /*------------------
        Niceselect
    --------------------*/
    $('select').niceSelect();

 /*------------------
        Scroll To Top
    --------------------*/
    $("#scrollToTopButton").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
     });


})(jQuery);
