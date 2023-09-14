//Changes the page background from red to white with buttons, also concatenates a sentence!

function makeBackgroundRed() {              //button that makes the background red
    document.body.style.backgroundColor= "red";
}
function makeBackgroundWhite() {            //button that makes the background white
    document.body.style.backgroundColor= "white";
}
function myFunction() {                     //Concatenates a sentence
    var sentence = "I am learning";
    sentence += " a lot from this book that I bought !";
    document.getElementById("Concatenate").innerHTML = sentence;
}