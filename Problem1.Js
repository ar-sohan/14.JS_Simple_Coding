// calculating the remaining money while buying the groceries
console.log("Assume you give me 1000 taka")
const givenMoney = 1000;
console.log("Apple 1kg = 200tk; Orange 1kg = 300tk")
const applePrice = 200;
const orangePrice = 300;
console.log("And you have bought 2kg of Apple and 1kg of Orange")
let appleAmount = 2;
let orangeAmount = 1;

const totalCost = appleAmount * applePrice + orangeAmount * orangePrice;

const remaining = givenMoney - totalCost;
console.log(`Here is your extra ${remaining} taka.`);
