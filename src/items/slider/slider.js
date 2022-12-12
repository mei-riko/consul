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
// const sliderLicences = () => {
//     sliderClassAdd( '.slider.slider_licences' );
//     if ( $(window).width() < 577 || window.matchMedia('screen and (max-width: 576px)').matches ){
//         if( !$( '.slider.slider_licences' ).hasClass('swiper-initialized') ){
//             const swiper = new Swiper('.slider.slider_licences', {
//                 // Optional parameters
//                 loop: false,
//                 slidesPerView: 1,
//                 spaceBetween: 12,
//                 breakpoints: {
//                     440: {
//                         slidesPerView: 2,
//                         spaceBetween: 12,
//                     },
//                 },
//             });
//         }
//     }else{
//         $( $( '.slider.slider_licences' ) ).each(function(){
//             if( $(this).hasClass('swiper-initialized') ){
//                 this.swiper.destroy(true, true);
//             }
//             sliderClassRemove( $(this) );
//         });
//     }
// }
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
                slidesPerView: 1,
                spaceBetween: 12,
                navigation: {
                    nextEl: '.slider__arrow_next',
                    prevEl: '.slider__arrow_prev',
                },
                breakpoints: {
                    577: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    769: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    1025: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                },
            });
        }
    }
    if( $( '.slider.slider_licences' ).length > 0 ){
        // sliderLicences();
        sliderClassAdd( '.slider.slider_licences' );
        if( !$( '.slider.slider_licences' ).hasClass('swiper-initialized') ){
            const swiper = new Swiper('.slider.slider_licences', {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                spaceBetween: 12,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    type: 'bullets',
                },
                breakpoints: {
                    440: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                    },
                    577: {
                        slidesPerView: 3,
                        spaceBetween: 24,
                    },
                },
            });
        }
    }
});
// Resize
// $(window).on("resize", function(){
//     sliderLicences();
// });