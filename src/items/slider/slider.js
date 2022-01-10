import $ from 'jquery';

const sliderClassAdd = ( container ) => {
    $( container ).addClass('swiper');
    $( container ).find('.slider__wrapper').addClass('swiper-wrapper');
    $( container ).find('.slider__slide').addClass('swiper-slide');
};
const sliderClassRemove = ( container ) => {
    $( container ).removeClass('swiper');
    $( container ).find('.slider__wrapper').removeClass('swiper-wrapper');
    $( container ).find('.slider__slide').removeClass('swiper-slide');
};

$(function() {
    if( $( '.slider.slider_sales' ).length > 0 ){
        sliderClassAdd( '.slider.slider_sales' );
        if( !$( '.slider.slider_sales' ).hasClass('swiper-initialized') ){
            const swiper = new Swiper('.slider.slider_sales', {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                spaceBetween: 24,
                pagination: {
                    el: ".slider__pagination",
                    type: "fraction",
                },
                navigation: {
                    nextEl: '.slider__arrow_next',
                    prevEl: '.slider__arrow_prev',
                },
            });
        }
    }
    if( $( '.slider.slider_review' ).length > 0 ){
        sliderClassAdd( '.slider.slider_review' );
        if( !$( '.slider.slider_review' ).hasClass('swiper-initialized') ){
            const swiper = new Swiper('.slider.slider_review', {
                // Optional parameters
                loop: false,
                slidesPerView: 2,
                spaceBetween: 24,
                navigation: {
                    nextEl: '.slider__arrow_next',
                    prevEl: '.slider__arrow_prev',
                },
                // breakpoints: {
                // },
            });
        }
    }
});
// Resize
// $(window).on("resize", function(){
//     sliderUnit('.slider');
// });