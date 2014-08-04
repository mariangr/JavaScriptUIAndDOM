function MakeTagCloud(tags, minFontSize, maxFontSize) {
    var notRepeatingTags = [];
    var numberOfRepetition = [];
    var currentPosition = 0;
    var isRepeated = false;
    for (var i = 0; i < tags.length; i++) {
        for (var j = 0; j < currentPosition; j++) {
            if (tags[j].toLowerCase() === tags[i].toLowerCase()) {
                isRepeated = true;
                break;
            }
        }
        if (!isRepeated) {

            element = tags[i].toLowerCase()
            notRepeatingTags.push(element);
            numberOfRepetition.push(1);
        }
        else {
            for (var k = 0; k < notRepeatingTags.length; k++) {
                if (notRepeatingTags[k] === tags[i]) {
                    numberOfRepetition[k] += 1;
                    break;
                }
            }
            isRepeated = false;
        }
        currentPosition++;
    }
    
    var maxRepetition = 0;

    for (var i = 0; i < numberOfRepetition.length; i++) {
        if (maxRepetition < numberOfRepetition[i]) {
            maxRepetition = numberOfRepetition[i];
        }
    }

    var div = document.createElement('div');


    for (var i = 0; i < notRepeatingTags.length; i++) {
        var result = document.createElement('span');
        result.style.fontSize = CurrentFontSizeCalculator(numberOfRepetition[i], maxRepetition, minFontSize, maxFontSize) + 'px';
        result.appendChild(document.createTextNode(tags[i] + ' '));
        div.appendChild(result);
    }

    document.body.appendChild(div);
}

function CurrentFontSizeCalculator(currentRepetition, maxRepetition, minFontSize, maxFontSize) {
    return minFontSize + (maxFontSize - minFontSize) * currentRepetition / maxRepetition;
}