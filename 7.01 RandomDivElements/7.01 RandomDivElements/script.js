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
    var numberOfDivs = document.getElementById("DivNumbers").value;
    //var input = document.getElementById("inputdiv");
    //input.style.zIndex = numberOfDivs + 10;
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
        newDiv.style.top = getRandomInt(0, 75) + '%';
        newDiv.style.left = getRandomInt(0, 75) + '%';

        newDiv.style.borderRadius = getRandomInt(0, 50) + '%';
        newDiv.style.borderColor = getRandomColor();
        newDiv.style.borderWidth = getRandomInt(1, 20) + 'px';
        newDiv.style.borderStyle = ['solid', 'dashed', 'dotted'][getRandomInt(0, 2)];
        newDiv.appendChild(createStrong("div"));
        documentFragment.appendChild(newDiv);
        //result.appendChild(newDiv);
    };

    result.appendChild(documentFragment);


    //document.appendChild(documentFragment);

};