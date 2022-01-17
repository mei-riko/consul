import $ from 'jquery';

$(function() {
    $(document).on('click', '.toggle .toggle__title', function(e){
        e.preventDefault();
        let $toggleTitle = $(this);
        let $toggle = $toggleTitle.parent();
        let $toggleContent = $toggle.find('.toggle__content');

        $toggleContent.slideToggle();

        if( !$toggleTitle.hasClass('toggle__title--active') ){
            $toggleTitle.addClass('toggle__title--active');
        }else{
            $toggleTitle.removeClass('toggle__title--active');
        }
    })
});