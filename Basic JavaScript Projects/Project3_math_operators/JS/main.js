function addition_Function() {
    var addition = 10 + 7;
    document.getElementById("Add").innerHTML = "10 + 7 = " + addition;
}
function subtraction_Function() {
    var subtraction = 100 - 98;
    document.getElementById("Math2").innerHTML = "100 - 98 = " + subtraction;
}
function modulus_Operator () {
    var simple_Math = 25 % 6;
    document.getElementById("Math3").innerHTML = "When you divide 25 by 6 you have a remainder of : " + simple_Math;
}
function negation_Operator () {
    var x = 10;
    document.getElementById("Math4").innerHTML = -x;
}
function multiply() {
    var multiply = 23 * 2;
    document.getElementById("Math5").innerHTML = "23 * 2 = " + multiply;
}
function divide() {
    var divide = 80 / 4;
    document.getElementById("Math6").innerHTML = "80 / 4 = " + divide;
}
function Increment() {
    var value = document.getElementById("IncrementText").innerHTML;
    value++;
    document.getElementById("IncrementText").innerHTML = value;
}
function Decrement() {
    var value = document.getElementById("DecrementText").innerHTML;
    value--;
    document.getElementById("DecrementText").innerHTML = value;
}
function random() {
    document.getElementById("Ran").innerHTML = Math.random()*10;
}
