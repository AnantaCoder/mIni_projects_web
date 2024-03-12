function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    if (weight && height) {
        var bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        document.getElementById("result").innerHTML = "Your BMI is: " + bmi;

        if (bmi <= 18.4) {
            document.getElementById("comment").innerHTML = "You are UNDERWEIGHT ❌";
        } else if (bmi > 18.4 && bmi <= 24.9) {
            document.getElementById("comment").innerHTML = "You are NORMAL";
        } else if (bmi > 24.9 && bmi <= 39.9) {
            document.getElementById("comment").innerHTML = "You are Overweight";
        } else if (bmi >= 40) {
            document.getElementById("comment").innerHTML = "Stop Eating U fat PIG 🫄";
        }
    } else {
        alert("Please enter both weight and height.");
    }
}
