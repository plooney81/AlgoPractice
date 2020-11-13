//! Given five positive integers, find the minimum and maximum values that can be calculated by 
//! summing exactly four of the five integers. Then print the respective minimum and maximum values 
//! as a single line of two space-separated long integers.

const miniMaxSum = (arr) => {
    const returnArr = [];
    // if we sort it from smallest to greatest, the first 4 numbers will be the smallest and the last 4 will be the largest
    arr.sort((a, b) => a - b);
    returnArr.push(arr.slice(0, 4).reduce((a, c) => a + c));
    returnArr.push(arr.slice(arr.length - 4).reduce((a, c) => a + c));
    console.log(returnArr.join(" "))
}

console.log(miniMaxSum([1, 3, 5, 7, 9])) // 16, 24 --> 16 being the smallest and 24 being the largest