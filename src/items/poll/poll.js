import $ from 'jquery';

let saleType = 0;
let saleAll = 0;
let priceAll = 0;
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// Total Cost
function totalResult(priceValue,saleValue){
    let totalCost = $("#total-cost");
    let sale = $("#sale");
    let saleBtn = $("#saleBtn");
    let totalCostSale = $("#total-sale");
  
    totalCost.html( priceValue );
    sale.html( saleValue );
    saleBtn.html( saleValue + "%");
    
    let saleCost = priceValue*(1 - saleValue/100);
    totalCostSale.html( saleCost.toFixed(0) );
}
// Total Sale
function saleTotal(){
    saleAll = 0;

    let saleCount = [];
    let saleCountPoll = 0;

    // How many programm 
    if ( $(".poll__row").length > 2){ 
        saleType = 5; 
    }else{
        saleType = 0;
    }
    // How many people
    $(".poll__row").each( function(i, elem){
        let count = $(elem).find(".poll__input").val();

        if( count < 5){
            saleCountPoll = 0;
        }else if( count >= 5 && count < 10 ){
            saleCountPoll = 10;
        }else if( count >= 10 ){
            saleCountPoll = 15;
        }
        // console.log( i + ':: saleCountPoll: ' + saleCountPoll + ':: saleCount: ' + saleCount);
        saleCount[i] = saleCountPoll;
    });

    saleAll = Math.round(saleCount.reduce(reducer)) + saleType;
    // console.log( saleAll );
}
// Total Price
function priceTotal(){
    priceAll = 0;
    $(".poll__row").each(function(i, element){
        priceAll = priceAll + $(element).find("option:selected").val()*$(element).find(".poll__input").val();
    });
}
// Remove Price
function removePrice( row ){
    // parent row
    let poll = row.closest(".poll__row");
    // select option
    let price = row.find("option:selected").val() ;
    // how many courses
    // let count = poll.find(".poll__input").val();
    // remove price
    poll.find(".poll__programm-price").html( price );

    // show a
    if ( price === "0" ){
        $(".poll__btn").removeClass("active");
    }else{
        $(".poll__btn").addClass("active");
    }

    priceTotal();
    saleTotal();
    totalResult(priceAll, saleAll);
}
// Remove Count
function removeCount( row ){    
    let poll = row.closest(".poll__row");
    let price = poll.find("option:selected").val() ;
    let count = poll.find(".poll__input").val();

    let priceAll = 0;

    if ( $(".poll__row").length > 1){
        $(".poll__row").each(function(i, element){
            priceAll = priceAll + $(element).find("option:selected").val()*$(element).find(".poll__input").val();
        });
    }else{
        priceAll = price*count;
    }

    priceTotal();
    saleTotal();
    totalResult(priceAll, saleAll);
}

$(function() { 
    // Poll Select Change
    $(document).on('change', '.poll .poll__row .poll__select', function(e){
        removePrice( $(this) );
    });
    // Poll Input Change
    $(document).on('change', '.poll .poll__row .poll__input', function(e){
        removeCount( $(this) );
    });
  
    // Add Programm
    var addRowId = 2;
    $("#addRow").on("click", function(){
        $("#row-1").clone().prop("id", "row-" + addRowId).insertBefore( $(this) );
        $("#row-" + addRowId).find(".poll__programm-price").html( "0" );
        $("#row-" + addRowId).find(".poll__input").val( 1 );
        $("<div class='poll__delete' data-id='row-"+ addRowId +"'>x</div>").appendTo("#row-" + addRowId);
        addRowId = addRowId + 1;
  
        // UpdateSale
        priceTotal();
        saleTotal();
        totalResult(priceAll, saleAll);
  
        // Delete Programm
        $(".poll__delete").on("click", function(){
            let rowId = $(this).data("id");
            $("#"+ rowId ).remove();
            priceTotal();
            saleTotal();
            totalResult(priceAll, saleAll);
        });
    });
    // Show Send Form
    $(".poll .poll__step.poll__step_start .poll__btn .btn").on("click", function(){
        $(".poll .poll__step.poll__step_start").slideToggle();
        $(".poll .poll__title").html("Сэкономить " + saleAll + "% на обучении");
        let message = "Скидка " + saleAll + "% на обучении.";
        $('.poll .poll__row').each(function(){
            message = message + "Программа: " + $(this).find('.poll__select option:selected').attr("data-programm") + ", количество обучаемых: " + $(this).find('.poll__input').val() + ". ";
        });
        $("#pollInfo").val( message );
        $(".poll .poll__step.poll__step_form").slideToggle();
    });
});