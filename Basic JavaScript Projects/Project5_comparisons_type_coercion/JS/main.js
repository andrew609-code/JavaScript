// 2 numbers of same type and value using === "equal to and data type"
x = 10;
y = 10;
document.write(x === y);
document.write("<br>");

// Combines a string with a number and a number
a = 82;
b = "82";
document.write(a === b);
document.write("<br>");

// Combines a string with a word and a number
c = "Ten";
d = 10;
document.write(c === d);
document.write("<br>");

// Combines the same type but different values
e = 23;
f = 46;
document.write(e === f);
document.write("<br>");

// And Statements resulting in true and false
document.write(5 > 2 && 10 > 4);
document.write("<br>");
document.write(5 < 2 && 10 > 4);
document.write("<br>");

// Or Statements resulting in true and false
document.write(5 > 2 || 3 > 5);
document.write("<br>");
document.write(1 > 2 || 2 > 3);

// Not function with onclick resulting in true and false
function not_Function () {
    document.getElementById ("Not").innerHTML = !(20 > 10);
}

function not_Function2 () {
    document.getElementById ("Not2").innerHTML = !(10 > 20);
}
document.write("<br>");

// Utilizing the == operator "equal to"
document.write (5 == 5);

function Ride_Function () {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"You are good";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}