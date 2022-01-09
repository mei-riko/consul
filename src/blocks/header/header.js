import $ from 'jquery';

const navbarMobileOpen = ( container ) => {
    $( container ).toggleClass('nav--open');
    $( container ).slideToggle();
    $('body').toggleClass('show-overlay');
};

export const navbarMobileClose = ( container ) => {
    $('body').removeClass('show-overlay');
    $('.header .header__toggle').removeClass('header__toggle--open');
    $( container ).removeClass('nav--open');
    $( container ).slideUp();
}

$(function() {
    $('.header .header__toggle').on('click', function(){
        $(this).toggleClass('header__toggle--open');
        navbarMobileOpen('nav.nav');
    });
    // sliderUnit('.slider.slider_inside');
});
// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 1024 || !window.matchMedia('screen and (max-width: 1024px)').matches ){
        if( $('nav.nav').hasClass('nav--open')){
            navbarMobileClose('nav.nav');
        }
        $('nav.nav').removeAttr('style');
    }
});