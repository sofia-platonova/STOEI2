$(document).ready(function () {
    $("#load-from-xml").click(function () {
        let textSize = $('input[name="size"]:checked').val();
        $.post("xmlfile.xml", function (data) {
            let sum = $(data).find("sum").text();
            let rate = $(data).find("rate").text();
            $("#sum").val(sum);
            $('#sum').css('font-size', textSize + 'px');
            $("#rate").val(rate);
            $('#rate').css('font-size', textSize + 'px');
        });
    });

    $('#load-script').click(function() {
        $.getScript('script.js');
    });

    $('#convert').click(function() {
        let sum = parseFloat($('#sum').val());
        let rate = parseFloat($('#rate').val());
        let $errorMessage1 = $('<div>').addClass('error-message-1').append($('<p>').text('<= Некорректный ввод данных')).appendTo($('body'));
        let $errorMessage2 = $('<div>').addClass('error-message-2').append($('<p>').text('<= Некорректный ввод данных')).appendTo($('body'));
        $('#sum').removeClass('error-input');
        $('#rate').removeClass('error-input');
        $('.error-message-1').fadeOut(500);
        $('.error-message-2').fadeOut(500);
        if (isNaN(sum) && isNaN(rate)) {
            $('#sum').addClass('error-input');
            $('#rate').addClass('error-input');
            $('.error-message-1').fadeIn(500);
            $('.error-message-2').fadeIn(500);
        } else if (isNaN(sum)) {
            $('#sum').addClass('error-input');
            $('.error-message-1').fadeIn(500);
        } else if (isNaN(rate)) {
            $('#rate').addClass('error-input');
            $('.error-message-2').fadeIn(500);
        } else if ($('#total').length) {
            let convertedSum = (sum * rate).toFixed(2);
            let size = $('input[name="size"]:checked').val();
            $("#total").val(convertedSum);
            $('#total').css('font-size', size + 'px');
        } else {
            let convertedSum = (sum * rate).toFixed(2);
            let size = $('input[name="size"]:checked').val();
            let $textLine = $('<div>').addClass('form-item')
            .append($('<label>').attr({for: "total",  class: "form-item-label"}).text('Сумма в рублях'))
            .append($('<input>').attr({type: "text", id: "total", class: "form-input", value: convertedSum, readonly: true})
                .css('font-size', size + 'px'))
            .insertAfter('#rate');
        }
    });
});