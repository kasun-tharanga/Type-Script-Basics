var numbers = [5, 6, 7, 8, 9];
for (var val in numbers) {
    document.write(val + "<br/>");
}
var numbersString = numbers.map(String);
for (var _i = 0, numbersString_1 = numbersString; _i < numbersString_1.length; _i++) {
    var val = numbersString_1[_i];
    document.write(val + "<br/>");
}
