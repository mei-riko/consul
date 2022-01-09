import $ from 'jquery';
import {navbarMobileClose} from '../items/slider/slider';

$(document).on('mouseup', function (e){
    let navbarActive = $('.nav.nav--open');
    let toggleActive = $('.header__toggle.header__toggle--open');
    
    //   && navbarActive.has(e.target).length === 0 // и не по его дочерним 
    if (!navbarActive.is(e.target) // клик был не по блоку
          && !toggleActive.is(e.target)
    ) {
        $('body').removeClass('show-overlay');
        toggleActive.removeClass('header__toggle--open');
        navbarActive.removeClass('nav--open');
        navbarActive.slideUp();
    }

    let $calculatorModal = $(".calculator .calculator__modal.calculator__modal--active");
    if (!$calculatorModal.is(e.target) // клик был не по блоку
          && $calculatorModal.has(e.target).length === 0 // и не по его дочерним 
    ) {
        $calculatorModal.removeClass('calculator__modal--active');
        $calculatorModal.slideUp();
    }
});