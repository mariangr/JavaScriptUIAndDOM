var slides = [
    '<img width = "1100px" height: "800px" src="http://www.hdwallpaperscool.com/wp-content/uploads/2013/11/muscle-cars-top-images-new-hd-wallpapers-classic.jpg"/>',
    '<table border="1" style="width:300px"><tr><td>Jill</td><td>Smith</td><td>50</td></tr><tr><td>Eve</td><td>Jackson</td><td>94</td></tr><tr><td>John</td><td>Doe</td><td>80</td></tr></table>',
    '<a href="http://www.w3schools.com/html/tryit.asp?filename=tryhtml_table_border_attribute">Link 1</a><br><a href="http://stackoverflow.com/questions/5730063/jquery-does-not-work-in-visual-studio-2010">Link 2</a>'];
var currentSlide = 0;
var timer = setInterval(nextSlide, 5000);

$(document).ready(function () {
    $('#frame').html(slides[0]);
    $('#next').on('click', function () { nextSlide() });
    $('#previous').on('click', function () { prevSlide() });
});

function nextSlide() {
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
    }
    else {
        currentSlide++;
    }
    $('#frame').html(slides[currentSlide]);
    resetTimer();
}

function prevSlide() {
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
    }
    else {
        currentSlide--;
    }
    $('#frame').html(slides[currentSlide]);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 5000);
}