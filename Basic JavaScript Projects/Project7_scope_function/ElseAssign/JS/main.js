function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough yet!";
    }
    document.getElementById("How old Are you?").innerHTML = Vote;
}