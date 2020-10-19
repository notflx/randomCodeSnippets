//Creates Array with as much random values as u want
function randomData(max) {
    var returnVal = [];
    for (var i = 0; i < max; i++) {
        returnVal[i] = Math.floor(Math.random() * 100);
    }
    return returnVal;
}