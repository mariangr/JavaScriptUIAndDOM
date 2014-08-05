$(document).ready(function () {
    $('#btn-add-elements').on('click', function () { AddNewElements() });
    $('<div id="test-div">').text('Test element').prependTo('body');
});

var elementBefore = 0;
var elementAfter = 0;

function AddNewElements() {
    //$('#test-div').append('<div>' + elementAfter + '</div>');
    //$('#test-div').prepend('<div>' + elementBefore + '</div>');

    InsertAfter($('#test-div'), '<div>' + elementAfter + '</div>');
    elementAfter++;
    InsertBefore($('#test-div'), '<div>' + elementBefore + '</div>');
    elementBefore += 2;
}

function InsertAfter(sibling, element) {
    $(sibling).append($(element));
}

function InsertBefore(sibling, element) {
    $(sibling).prepend($(element));
}