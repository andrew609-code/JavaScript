function my_Dictionary() {
    var Car = {
        Type: "Lexus",
        Color: "Silver",
        Model: "Is 300",
        Year: 2019,
        Cylinders: 6,
        Automatic: "yes",
    };
delete Car.Year;
document.getElementById("Dictionary").innerHTML = Car.Year;
}