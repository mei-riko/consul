import $ from 'jquery';

$(function() {
    // Fancybox
    if ( $('[data-fancybox]').length > 0 ){
        $('[data-fancybox]').fancybox({
            autoFocus: false,
        });
    }

    // Animate Scroll
    $(document).on('click', '[data-trigger="scroll"]', function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    // Link Disable
    $(document).on('click', '[data-trigger="click"]', function(e){
        e.preventDefault();
    })
    // Toggle
    $(document).on('click', '[data-trigger="toggle"]', function(e){
        e.preventDefault();
        let $toggleBtn = $(this);
        let toggleContent = $toggleBtn.data('toggle');
        let toggleContentOpen = $toggleBtn.data('open');
        let toggleContentClose = $toggleBtn.data('close');

        $(toggleContent).slideToggle();

        if( $toggleBtn.data('status') != 'active' ){
            $toggleBtn.data('status', 'active');
            $toggleBtn.text( toggleContentClose );
        }else{
            $toggleBtn.data('status', '');
            $toggleBtn.text( toggleContentOpen );
        }
    })
});

import './mouseup';
// import '../blocks/tabs/tabs';
import '../items/input/input';
import '../items/slider/slider';
// import '../blocks/header/header';
