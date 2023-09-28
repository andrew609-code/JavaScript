function car_Function() {
    var car_Output;
    var Cars = document.getElementById("car_Input").value;
    var car_String = " is a great car!";
    switch (Cars) {
        case "Cadillac":
            car_Output = "Cadillac" + car_String;
        break;
        case "Genesis":
            car_Output = "Genesis" + car_String;
        break;
        case "Mercedes":
            car_Output = "Mercedes" + car_String;
        break;
        case "Lexus":
            car_Output = "Lexus" + car_String;
        break;
        case "BMW":
            car_Output = "BMW" + car_String;
        break;
        case "Audi":
            car_Output = "Audi" + car_String;
        break;
        default:
            car_Output = "Please enter the make of the car you choose exactly!";
    }
    document.getElementById("Output").innerHTML = car_Output;
}