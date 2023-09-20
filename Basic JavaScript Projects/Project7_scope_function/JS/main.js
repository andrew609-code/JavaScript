var x = 10; // global Variable

function Add_numbers_1() {
    var x = 99; // Local Variable
    document.write(10 + x + "<br>"); //using local variable
}
function Add_numbers_2() {
    document.write(x + 11);
    console.log(x);
}
Add_numbers_1();
Add_numbers_2();

//A function that includes an if statement
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today? it's before 6pm";
    }
}