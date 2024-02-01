/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weight = 65;
const height = 172.72;

const bmi = weight / ((height/100) * 2);
console.log("Your weight is : " + bmi.toFixed(2));
if (bmi < 18.5) {
    console.log("You are Under Weight");
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("You are Normal");
}
else if (bmi >= 25 && bmi <= 29.5) {
    console.log("You are Over Weight");
}
else {
    console.log("You are Obese");
}