//1
/*var num = parseInt(prompt("Input number:"));
if(num%2==0)
{
    alert("Your number is even!");
}
else{
    alert("Your number is odd");
}*/

//2
/*var num1 = parseInt(prompt("Input first number:"));
var num2 = parseInt(prompt("Input second number:"));
if(num1<num2){
    alert(num1+" is less than "+num2);
}
else if(num2<num1){
    alert(num2+" is less than "+num1);
}
else{
    alert("They are equal!");
}*/

//3
/*var num = parseInt(prompt("Input number:"));
if(num<0)
{
    alert("Negative");
}
else if(num>0)
{
    alert("Positive");
}
else {
    alert("Zero");
}*/

//4
/*var num1 = parseInt(prompt("Input first number:"));
var num2 = parseInt(prompt("Input second number:"));
var num3 = parseInt(prompt("Input third number:"));
if (num1 > num2 && num1 > num3) {
    alert(num1 + " is the biggest out of three");
}
else if (num2 > num1 && num2 > num3) {
    alert(num2 + " is the biggest out of three");
}
else if (num3 > num1 && num3 > num2){
    alert(num3 + " is the biggest out of three");
}
else {
    alert("They are equal");
}*/

//5
/*var a = parseFloat(prompt("Input a:"));
var b = parseFloat(prompt("Input b:"));
var answ = parseInt(prompt("1 - a+b, 2 - a-b, 3 - a*b, 4 - a/b"))
if (answ == 1) {
    alert(a + " + " + b + " = " + (a + b));
}
else if (answ == 2) {
    alert(a + " - " + b + " = " + (a - b));
}
else if (answ == 3) {
    alert(a + " * " + b + " = " + (a * b));
}
else if (answ == 4) {
    alert(a + " / " + b + " = " + (a / b));
}
else {
    alert("Incorrect input");
}*/

//6
/*var num = parseInt(prompt("Input number:"));
if (num >= 1 && num <= 30) {
    alert("Your number is in the range of 1-30");
}
else {
    alert("Your number is not in the range of 1-30");
}*/

//7
/*var x = parseInt(prompt("Input x:"));
var y = parseInt(prompt("Input y:"));
if(x%y==0)
{
    alert("Число " + x + " кратно числу " + y);
}
else{
    alert("Число " + x + " не кратно числу " + y);
}*/

//8
/*var num = parseInt(prompt("Input number:"));
if (num % 3 == 0) {
    alert("Число " + num + " кратно 3");
}
else{
    alert("Число " + num + " не кратно 3");
}
if (num % 5 == 0) {
    alert("Число " + num + " кратно 5");
}
else{
    alert("Число " + num + " не кратно 5");
}
if (num % 7 == 0) {
    alert("Число " + num + " кратно 7");
}
else{
    alert("Число " + num + " не кратно 7");
}*/

//9
/*var num = parseInt(prompt("Input number:"));
if(num<0)
{
    alert(-num);
}
else {
    alert(num);
}*/

//10
/*var num = parseInt(prompt("Input number:"));
if ((num / 1000) < 10) {
    var thouthands = Math.trunc(num / 1000);
    var hundreds = Math.trunc((num - (thouthands * 1000)) / 100);
    var tens = Math.trunc((num - (thouthands * 1000) - (hundreds * 100)) / 10);
    var lastNum = Math.trunc(num - (thouthands * 1000) - (hundreds * 100) - (tens * 10));
    var sum = thouthands + hundreds + tens + lastNum;
    if (thouthands == 0) {
        if (hundreds == 0) {
            if (tens == 0) {
                alert("One-digit number");
            }
            else {
                alert("Two-digit number")
            }
        }
        else {
            alert("Three-digit number");
        }
    }
    else {
        alert("Four-digit number");
    }
    alert("Sum = " + sum);
}
else {
    alert("Invalid input");
}*/

//11
/*var h = parseInt(prompt("Input your height:"));
var w = parseInt(prompt("Input your weight:"));
if (w == h - 110) {
    alert("You have an ideal weight!");
}
else if (w > h - 110) {
    var diff = w - (h - 110);
    var answ = "You weight too much. You should lose " + diff.toString() + " kg.";
    alert(answ);
}
else {
    var diff = (h - 110) - w;
    var answ = "You weight too little. You should gain " + diff.toString() + " kg.";
    alert(answ);
}*/