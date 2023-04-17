function bmi() {
    // Get feet and inches value

    let feet = document.querySelector(".feet").value;
    let inch = document.querySelector(".inch").value;

    // Merge feet and inches value in one in metre
    let metre = feet + "." + inch;
    // get the height in metre
    let height = metre / 3.2808;
    //GET WEIGHT VALUE
    let weight = document.querySelector(".weight").value;
    // BMI Calculation
    let bmi = weight / Math.pow(height, 2);
    //BMI showing in p Tag with Condition
    if (bmi < 18.5) {
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- " + (Math.round(bmi * 100) / 100).toFixed(2) + "<br>" + "Index Value is Under Weight";
    } else if ((bmi >= 25) && (bmi <= 29.9)) {
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- " + (Math.round(bmi * 100) / 100).toFixed(2) + "<br>" + "Index Value is in Over Weight";
    } else if (bmi > 30) {
        document.querySelector("p").innerHTML = "Your Body Mass Index(BMI) is:- " + (Math.round(bmi * 100) / 100).toFixed(2) + "<br>" + "Index Value is in Obesity";
    }

}
// Click Event Fire on Calculate Button
document.querySelector(".btn").addEventListener("click", bmi);