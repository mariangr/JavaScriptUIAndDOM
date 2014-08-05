$(document).ready(function () {
    $('#color').on('change', function () {
        ChangeColor();
    }
    )
});

function ChangeColor() {
    var color = $('#color').val();
    $('body').css('background', color);
}