//Project 10 assignment

//Function using a while loop
function count_to_Ten() {
    var Digit = "";
    var x = 1;
    while (x < 11) {
        Digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_ten").innerHTML = Digit;
}

//Function using a for loop
var Instruments = [
    "Guitar",
    "Drums",
    "Piano",
    "Bass",
    "Violin",
    "Trumpet",
    "Flute",
];
var content = "";
var y;
function for_Loop() {
    for (y = 0; y < Instruments.length; y++) {
        content += Instruments[y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content;
}

//Function with an Array
function color_array() {
    var Colors = [];
    Colors[1] = "Green";
    Colors[2] = "Red";
    Colors[3] = "Blue";
    Colors[4] = "Yellow";
    Colors[5] = "Orange";
    Colors[6] = "Purple";
    document.getElementById("Array").innerHTML = "My favorite color is "  + Colors[3] + ".";
}

//Creating an object with the "let" keyword
function car() {
    let car = {
        make: "Lexus",
        year: "2019",
        color: "Silver",
        model: "IS300",
    };

    document.getElementById("car").innerHTML = 
    "I have a " + car.color + " " + car.year + " " + car.make + " " + car.model + " and I have had no problems with it so far!";
}