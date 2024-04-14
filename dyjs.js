function Help() {
    console.log("Das ist das dyjs netzwerk. Hier stehen die ganz viele Funktionen zur verfügung, womit du deinen JS Code leichter schreiben kannst.Packe diese datei einfach in den selben ordner wie die datei, in der du die funktionen verwenden möchtest.");
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dupeInt(Int) {
    return Int * 2;
}

function addNumbers(int1, int2) {
    return int1 + int2;
}

function addWithRandomInt(number, rmin, rmax) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return getRandomInt(rmin, rmax) + number;
}

function subtractInts(int, subtractInt) {
    return int / subtractInt;
}

function subtractWithRandomInts(beSubtractINT, SubtractorMin, SubtractorMax) {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return beSubtractINT / getRandomInt(SubtractorMin, SubtractorMax);
}


module.export = {
    Help,
    getRandomInt,
    dupeInt,
    addNumbers,
    addWithRandomInt,
    subtractInts,
    subtractWithRandomInts
}