/*
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
console.log("Spend more than 500 to get an amazing offer!")
const cost = 560;
const coke = 30;
let finalCost = 0;
if (cost > 500) {
    finalCost = cost - coke;
    console.log("Congratulations! You got the discount!")
}
else {
    finalCost = cost;
}

console.log("Your total cost is : " + finalCost);