var myName = "Kasun Tharanga";
var anythingValue = "Tree";
anythingValue = 2;
document.getElementById("nameValue").innerHTML =
    "My name is " + myName;
document.getElementById("typeValue").innerHTML =
    "My anything type is " + typeof (anythingValue);
    
//Command to compile
//tsc typeScript.ts --watch --target ES5
