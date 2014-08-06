$(document).ready(function(){
    $("#dropdown").dropdown();
})

$.fn.dropdown = function (ev) {
    $this = $(this);
    var elements = [];
    var $target = $("option");
    for (var i = 0, len = $target.length; i < len; i++) {
        elements.push($($target[i]).html());
    }

    $(this).css({"display":"none"});
    var $div = $('<div"></div>').addClass("dropdown-list-container").appendTo('body');
    var $ul = $('<ul></ul>').addClass("dropdown-list-options").appendTo($div);
    
    for (var i = 0, len = elements.length; i < len; i++) {
        var currentElement = $('<li data-value="' + i + '"></li>').addClass("dropdown-list-option").html(elements[i]);
        if ($($target[i]).attr('selected') == 'selected') {
            currentElement.css('background-color', 'red');
        }
        currentElement.appendTo($ul);

    }

    $(".dropdown-list-option").on("click", function () {
        var data = $(this).attr('data-value');
        var $options = $('option');
        var $selectedElement = $($options[data]);
        var $listOfLi = $('li');

        if ($selectedElement.attr('selected') == 'selected') {
            $selectedElement.removeAttr('selected', '')
            $(this).css('background-color', '')
        }
        else {
            for (var i = 0; i < $target.length; i++) {
                if ($($options[i]).attr('selected') == 'selected') {
                    ($($options[i])).removeAttr('selected', '');
                    ($($listOfLi[i])).css('background-color', '');
                    //$(this).css('background-color', '')
                }
            }
            $selectedElement.attr('selected', 'selected')
            $(this).css('background-color', 'red')
        }
    });

    return $this;
}