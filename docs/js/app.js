!function(e){var a={};function t(l){if(a[l])return a[l].exports;var n=a[l]={i:l,l:!1,exports:{}};return e[l].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=a,t.d=function(e,a,l){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(l,n,function(a){return e[a]}.bind(null,n));return l},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=1)}([function(e,a){e.exports=jQuery},function(e,a,t){"use strict";var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};t(2),t(3),t(4),t(5),t(6),(0,i.default)((function(){(0,i.default)("[data-fancybox]").length>0&&(0,i.default)("[data-fancybox]").fancybox({autoFocus:!1}),(0,i.default)(document).on("click",'[data-trigger="scroll"]',(function(e){return e.preventDefault(),(0,i.default)("html, body").animate({scrollTop:(0,i.default)((0,i.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,i.default)(document).on("click",".scroll",(function(e){return e.preventDefault(),(0,i.default)("html, body").animate({scrollTop:(0,i.default)((0,i.default)(this).attr("href")).offset().top+"px"},{duration:500,easing:"swing"}),!1})),(0,i.default)(document).on("click",'[data-trigger="click"]',(function(e){e.preventDefault()})),(0,i.default)(document).on("click",'[data-trigger="toggle"]',(function(e){e.preventDefault();var a=(0,i.default)(this),t=a.data("toggle"),l=a.data("open"),n=a.data("close");(0,i.default)(t).slideToggle(),"active"!=a.data("status")?(a.data("status","active"),a.text(n)):(a.data("status",""),a.text(l))}))}))},function(e,a,t){"use strict";var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};(0,i.default)(document).on("mouseup",(function(e){var a=(0,i.default)(".nav.nav--open"),t=(0,i.default)(".header__toggle.header__toggle--open");a.is(e.target)||t.is(e.target)||((0,i.default)("body").removeClass("show-overlay"),t.removeClass("header__toggle--open"),a.removeClass("nav--open"),a.slideUp());var l=(0,i.default)(".calculator .calculator__modal.calculator__modal--active");l.is(e.target)||0!==l.has(e.target).length||(l.removeClass("calculator__modal--active"),l.slideUp())}))},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.unitMaskPhone=void 0;var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};function s(e){var a;switch(e.attr("data-input")){case"message":e.val().length>2?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error");break;case"mail":a=e.val(),/^([\w-\.]+@([\w-]+\.)+[\w-]{2,5})?$/.test(a)&&e.val().length>0?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error");break;case"name":e.val().length>2?e.removeClass("input--error").addClass("input--success"):e.removeClass("input--success").addClass("input--error")}}var d=a.unitMaskPhone=function(){(0,i.default)('input[data-input="phone"]').inputmask({mask:"+7 (999) 999 99 99",placeholder:" ",showMaskOnHover:!1,onincomplete:function(){(0,i.default)(this).closest("form").addClass("error-phone"),(0,i.default)(this).addClass("input--error"),(0,i.default)(this).siblings(".error_phone").addClass("error").html("Укажите корректный номер"),(0,i.default)(this).removeClass("input--success")},oncomplete:function(){(0,i.default)(this).closest("form").removeClass("error-phone"),(0,i.default)(this).removeClass("input--error"),(0,i.default)(this).siblings(".error_phone").removeClass("error").html(""),(0,i.default)(this).addClass("input--success")}})};(0,i.default)((function(){(0,i.default)('input[type="tel"]').length>0&&d(),(0,i.default)(".input").on("input",(function(){s((0,i.default)(this))})),(0,i.default)(".input").on("change",(function(){s((0,i.default)(this))}))})),(0,i.default)("input").on("keydown",(function(e){if(13===e.keyCode&&!(0,i.default)(this).inputmask("isComplete"))return e.preventDefault(),(0,i.default)(this).blur(),!1}))},function(e,a,t){"use strict";var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};var s=function(e){(0,i.default)(e).addClass("swiper"),(0,i.default)(e).find(".slider__wrapper").addClass("swiper-wrapper"),(0,i.default)(e).find(".slider__slide").addClass("swiper-slide")},d=function(){if(s(".slider.slider_licences"),(0,i.default)(window).width()<577||window.matchMedia("screen and (max-width: 576px)").matches){if(!(0,i.default)(".slider.slider_licences").hasClass("swiper-initialized"))new Swiper(".slider.slider_licences",{loop:!1,slidesPerView:1,spaceBetween:12,breakpoints:{440:{slidesPerView:2,spaceBetween:12}}})}else(0,i.default)((0,i.default)(".slider.slider_licences")).each((function(){var e;(0,i.default)(this).hasClass("swiper-initialized")&&this.swiper.destroy(!0,!0),e=(0,i.default)(this),(0,i.default)(e).removeClass("swiper"),(0,i.default)(e).find(".slider__wrapper").removeClass("swiper-wrapper"),(0,i.default)(e).find(".slider__slide").removeClass("swiper-slide")}))};(0,i.default)((function(){if((0,i.default)(".slider.slider_sales").length>0&&(s(".slider.slider_sales"),!(0,i.default)(".slider.slider_sales").hasClass("swiper-initialized")))new Swiper(".slider.slider_sales",{loop:!1,slidesPerView:1,spaceBetween:24,pagination:{el:".slider__pagination",type:"fraction"},navigation:{nextEl:".slider__arrow_next",prevEl:".slider__arrow_prev"}});if((0,i.default)(".slider.slider_review").length>0&&(s(".slider.slider_review"),!(0,i.default)(".slider.slider_review").hasClass("swiper-initialized")))new Swiper(".slider.slider_review",{loop:!1,slidesPerView:1,spaceBetween:12,navigation:{nextEl:".slider__arrow_next",prevEl:".slider__arrow_prev"},breakpoints:{577:{slidesPerView:2,spaceBetween:24},769:{slidesPerView:1,spaceBetween:24},1025:{slidesPerView:2,spaceBetween:24}}});(0,i.default)(".slider.slider_licences").length>0&&d()})),(0,i.default)(window).on("resize",(function(){d()}))},function(e,a,t){"use strict";var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};(0,i.default)((function(){(0,i.default)(document).on("click",".toggle .toggle__title",(function(e){e.preventDefault();var a=(0,i.default)(this);a.parent().find(".toggle__content").slideToggle(),a.hasClass("toggle__title--active")?a.removeClass("toggle__title--active"):a.addClass("toggle__title--active")}))}))},function(e,a,t){"use strict";var l,n=t(0),i=(l=n)&&l.__esModule?l:{default:l};function s(){var e=(0,i.default)(".nav").find(".nav__link.nav__link--active"),a=e.data("nav");e.removeClass("nav__link--active"),(0,i.default)(".nav .nav__children"+a).removeClass("nav__children--active")}function d(e){var a=null;e.mouseenter((function(e){clearTimeout(a);var t=(0,i.default)(this);a=setTimeout((function(){!function(e){var a=e.closest(".header"),t=e.find(".nav__link"),l=t.data("nav");if(a.find(".nav__link.nav__link--active").length>0&&!t.hasClass("nav__link--active")){var n=(0,i.default)(".nav__link.nav__link--active");n.removeClass("nav__link--active"),a.find(".nav .nav__children"+n.data("nav")).removeClass("nav__children--active")}t.addClass("nav__link--active"),a.find(".nav .nav__children"+l).addClass("nav__children--active")}(t)}),100)})).mouseleave((function(e){clearTimeout(a),a=setTimeout(s,300)}))}function r(e){var a=e.closest(".header");e.find(".nav__link").on("click",(function(e){e.preventDefault();var t=(0,i.default)(this).data("nav");console.log(a.find(".nav .nav__children"+t)),a.find(".nav .nav__children"+t).slideToggle()}))}(0,i.default)((function(){(0,i.default)(".header .header__toggle").on("click",(function(){(0,i.default)(this).hasClass("header__toggle--open")?((0,i.default)(this).removeClass("header__toggle--open"),(0,i.default)(".header .header__grid").removeClass("header__grid--active")):((0,i.default)(this).addClass("header__toggle--open"),(0,i.default)(".header .header__grid").addClass("header__grid--active"))})),(0,i.default)(window).width()>769||!window.matchMedia("screen and (max-width: 768px)").matches?((0,i.default)(".nav").removeClass("nav--mobile").addClass("nav--desktop"),(0,i.default)(".header .header__toggle").removeClass("header__toggle--open"),(0,i.default)(".header .header__grid").removeClass("header__grid--active"),(0,i.default)(".nav__children").each((function(){(0,i.default)(this).removeAttr("style")})),d((0,i.default)(".nav.nav--desktop .nav__item.nav__item_has-child"))):((0,i.default)(".nav").removeClass("nav--desktop").addClass("nav--mobile"),r((0,i.default)(".nav.nav--mobile .nav__item.nav__item_has-child")))})),(0,i.default)(window).on("resize",(function(){(0,i.default)(window).width()>769||!window.matchMedia("screen and (max-width: 768px)").matches?((0,i.default)(".nav").removeClass("nav--mobile").addClass("nav--desktop"),(0,i.default)(".header .header__toggle").removeClass("header__toggle--open"),(0,i.default)(".header .header__grid").removeClass("header__grid--active"),(0,i.default)(".nav__children").each((function(){(0,i.default)(this).removeAttr("style")})),d((0,i.default)(".nav.nav--desktop .nav__item.nav__item_has-child"))):((0,i.default)(".nav").removeClass("nav--desktop").addClass("nav--mobile"),r((0,i.default)(".nav.nav--mobile .nav__item.nav__item_has-child")))}))}]);