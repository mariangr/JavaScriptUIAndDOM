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
    var $div = $('<div class="dropdown-list-container"><div>').appendTo('body');
    var $ul = $('<ul class="dropdown-list-options"></ul>').appendTo($div);
    for (var i = 0, len = elements.length; i < len; i++) {
        $('<li class="dropdown-list-option" data-value="' + i + '">' + elements[i] + '</li>').appendTo($ul);
    }


}