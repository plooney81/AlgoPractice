//! Two Essential parts of a recursive function:
//!     1. Base Case
//!     2. Different Input


//! Ex. 1 --> countDown
//? Function that counts down recursively from a number that the user inputs.
const countDown = (num) => {
    if(num <= 0){
        console.log("All done");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// countDown(10);
// countDown(9);
// countDown(8);
// countDown(7);


//! Ex. 2 --> sumRange
//? Function sums the range between 1 and N recursively.

// Original
const sumRange1 = (num) => {
    if(num === 1){
        return 1;
    }
    return num + sumRange(num - 1);
}

// Refactored
const sumRange = (num) => {
    return num === 1 ? 1 : num + sumRange(num - 1);
}

//even more
const sumRange2 = (num) => num === 1 ? 1 : num + sumRange2(num - 1);

console.log(sumRange2(3)); //6
console.log(sumRange2(4)); //10
console.log(sumRange2(5)); //15