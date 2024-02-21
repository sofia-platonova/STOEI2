$(document).ready(function() {
    $.get('textfile.txt', function(data) {
        let lines = data.split('\n');
        let $textElement = $('<div>').addClass('modal-content');
        $textElement.append($('<h3>').text('РЕКВИЗИТЫ БАНКА'));
        lines.forEach(function (line) {
            $textElement.append($('<p>').text(line));
        });
        let $modalWindow = $('<div>').addClass('modal').append($textElement).appendTo($('body'));
        $modalWindow.append($('<div>').addClass('close').append($('<p>').text('X')));
      $('.close').click(function() {
        $modalWindow.remove();
      });
    });
    $('.modal').fadeIn(300);
    $('.modal-content').fadeIn(300);
    $('.modal-content h3').fadeIn(300);
});