$(document).ready(function () {
    var msgBox = $('#message-box').messageBox();

    $('#error-btn').on('click', function () {
        msgBox.error('ERROR', 'red')
    });

    $('#success-btn').on('click', function () {
        msgBox.success('SUCCESS', 'green')
    });
});

$.fn.messageBox = function () {
    var $this = $(this);

    function showMessage(message, backgroundColor) {
        var $result = $('#message-box-result');

        $result.html(message);
        $result.css('background-color', backgroundColor);

        $result.stop().fadeIn(3000, function () {
            $result.fadeOut(3000, function () {
                $result.html('');
            });
        });
    }

    return {
        success: function () {
            showMessage('success', 'lightgreen');

            return $this;
        },
        error: function () {
            showMessage('error', 'red');

            return $this;
        }
    };
}

