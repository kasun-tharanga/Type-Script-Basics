interface Vechile {
    modelName : String;
    modelYear : String;
}

var bmw : Vechile = {
    modelName : "bmw real vechile",
    modelYear : "2000"
}

document.write(bmw.modelName + " is in " + bmw.modelYear);