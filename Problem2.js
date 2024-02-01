// Write a programme to calculate the average marks in Mathematics, Physics, Chemistry, English and Bangla of a student
const marks = [75.25, 65, 80, 35.45, 99.50];
let totalMark = 0;
for (let i = 0; i < marks.length; i++){
    totalMark += marks[i];
}
let averageMark = totalMark / 5;

console.log(`You did amazing! You have got ${averageMark.toFixed(2)} on an average`);