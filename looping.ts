var numbers = [5,6,7,8,9];

for(var val in numbers){
    document.write(val + "<br/>");
}

var numbersString = numbers.map(String);


for(var val of numbersString){
    document.write(val + "<br/>");
}
