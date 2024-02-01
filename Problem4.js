// explanation of the outputs
const a = isNaN('a');
console.log(a);
// Because isNaN identifies whether it is not a number. As in the above statement we have placed a string as an argument. So, it will return false as '11' is converted as a number.

const b = isNaN(2 - 10);
console.log(b);

// because -8 is a number