/* 
----------------
Table Of Content
----------------
1. Dropdown Menu Start
2. Window Scroll Start
3. Main Banner Slide Start
*/

function dropdown() {
    var dropdown = document.querySelector(".menu-dropdown"),
        dropdown_menu = document.querySelector(".my-dropdown-menu"),
        arrow = document.querySelector(".arrow");

    $(dropdown).on('click', function(event) {
        $(dropdown_menu).toggle(500);

        $(arrow).toggleClass('rotate');

        $(dropdown).toggleClass('menu-color');
    });
}
dropdown();

function mobileDropdown() {
    var dropdown = document.querySelector(".mobile-dropdown"),
        dropdown_menu = document.querySelector(".mobile-dropdown-menu"),
        arrow = document.querySelector(".m-arrow");

    $(dropdown).on('click', function(event) {
        $(dropdown_menu).toggle(500);

        $(arrow).toggleClass('rotate');

        $(dropdown).toggleClass('menu-color');
    });
}
mobileDropdown();
// Dropdown Menu End

$(window).scroll(function(){
    var scrolling = $(this).scrollTop(),
        navbar = document.querySelector(".main-header"),
        mobile_navbar = document.querySelector(".mobile-header");

    if( scrolling > 40){
      $(navbar).addClass("nav-anim");
    }
    else{
      $(navbar).removeClass("nav-anim");
    }

    if( scrolling > 40){
      $(mobile_navbar).addClass("nav-anim");
    }
    else{
      $(mobile_navbar).removeClass("nav-anim");
    }
});
// Window Scroll End

function mainSlider() {
    var myBannerSlider = $('.banner-slide');

    myBannerSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
    });

    myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    myBannerSlider.slick({
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        dots: true,
        fade: true,
        prevArrow: '.ban-prev',
        nextArrow: '.ban-next',
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
              });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();
// Main Banner Slide End