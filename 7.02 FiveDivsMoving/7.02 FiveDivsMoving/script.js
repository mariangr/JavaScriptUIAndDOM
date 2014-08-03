function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
    return "rgb(" + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ',' + getRandomInt(0, 255) + ')';
}

function createStrong(text) {
    var result = document.createElement('strong');

    result.appendChild(document.createTextNode(text));

    return result;
}

function GenerateDivs() {
    var numberOfDivs = 5;
    var result = document.getElementById("resultFromAppend");
    result.innerHTML = '';



    var documentFragment = document.createDocumentFragment();

    for (var i = 0; i < numberOfDivs; i++) {
        var newDiv = document.createElement('div');
        newDiv.style.width = getRandomInt(20, 100) + 'px';
        newDiv.style.height = getRandomInt(20, 100) + 'px';

        newDiv.style.backgroundColor = getRandomColor();

        newDiv.style.color = getRandomColor();
        newDiv.style.textAlign = 'center';

        newDiv.style.position = 'absolute';
        newDiv.style.top = getRandomInt(300, 800) + 'px';
        newDiv.style.left = getRandomInt(400, 1200) + 'px';

        newDiv.style.borderRadius = getRandomInt(0, 50) + '%';
        newDiv.style.borderColor = getRandomColor();
        newDiv.style.borderWidth = getRandomInt(1, 20) + 'px';
        newDiv.style.borderStyle = ['solid', 'dashed', 'dotted'][getRandomInt(0, 2)];
        newDiv.appendChild(createStrong("div"));
        documentFragment.appendChild(newDiv);
        newDiv.id = "divNumber-" + (i + 1);
    };

    result.appendChild(documentFragment);

};

var angle = 0;
var radius = 50;
var maxAngle = false;



function MoveDivs(allDivs) {
    
    for (i = 1; i <= 5; i++) {
        var currentDiv = allDivs[i];
        currentDiv.style.left = 250 + Math.cos(angle + 2 * Math.PI / 5 * i) / radius * 10000 + 'px';
        currentDiv.style.top = 250 + Math.sin(angle + 2 * Math.PI / 5 * i) / radius * 10000 + 'px';
    }

    var allDivs = document.querySelectorAll('div');
    angle = angle + 0.1;

    //setTimeout(MoveDivs(allDivs), 1000);

}