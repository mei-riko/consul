import $ from 'jquery';

function validateEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,5})?$/;
    return emailReg.test( $email );
}
function checkInputValue( $input ){
	let name = $input.attr('data-input');
		
	switch (name) {
		case 'message':
			if( $input.val().length > 2 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		case 'mail':
			if( validateEmail($input.val()) &&  $input.val().length > 0 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		case 'name':
			if( $input.val().length > 2 ){
				$input.removeClass('input--error').addClass('input--success');
			}else{
				$input.removeClass('input--success').addClass('input--error');
			}
			break;
		default:
			break;
	};
}

export let unitMaskPhone = () => {
    $('input[data-input="phone"]').inputmask({
        mask: '+7 (999) 999 99 99',
        placeholder: " ",
        showMaskOnHover: false,
        onincomplete: function(){ 
            $(this).closest("form").addClass('error-phone'); 
            $(this).addClass('input--error'); 
            $(this).siblings('.error_phone').addClass('error').html('Укажите корректный номер'); 
            $(this).removeClass('input--success');
        }, 
        oncomplete: function(){ 
            $(this).closest("form").removeClass('error-phone'); 
            $(this).removeClass('input--error'); 
            $(this).siblings('.error_phone').removeClass('error').html(''); 
            $(this).addClass('input--success'); 
        },
    })
}

$(function() {
    // Input Mask Phone
    if( $('input[type="tel"]').length > 0 ) {
        unitMaskPhone();
    }

    // Проверка для смены классов при введении
	$('.input').on('input', function() {
		let $input = $(this);
		checkInputValue( $input );
	});
	// Проверка для смены классов при автозаполнении
	$('.input').on('change', function() {
		let $input = $(this);
		checkInputValue( $input );
	});
});

$('input').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});