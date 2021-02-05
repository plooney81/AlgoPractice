const {performance} = require('perf_hooks');

//* Write a function that accepts an input n
//* the returns the sum from 1 up to n


//! Math approach
const addUpToMath = (n) => (n * (n + 1)) / 2

//! For loop approach
const addUpToSingleForLoop = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

//! Nested For loop approach
const addUpToNested = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            total += 1;
        }
    }
    return total;
}


//! Timing function
//* algo 1 is the math approach
//* algo 2 is the for loop approach
//* algo 3 is the nested for loop approach
const checkTime = (n, algo) => {
    let t1 = performance.now();
    if(algo === 1){
        addUpToMath(n)
    }else if(algo === 2){
        addUpToSingleForLoop(n)
    }else{
        addUpToNested(n)
    }
    let t2 = performance.now();
    console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)
}

checkTime(10000, 1);
checkTime(10000, 2);
checkTime(10000, 3);

// console.log(addUpToMath(4))
// console.log(addUpToSingleForLoop(4))
// console.log(addUpToNested(4))





const numberOfHalves = n => {
    let count = 0;
    while(n > 1){
        console.log(n)
        n /= 2;
        count++;
    }
    return count;
}

// console.log(numberOfHalves(8));
// console.log(numberOfHalves(16));
// console.log(numberOfHalves(32));





// // Recursive approach
// const addUpToRecursive = (n) => {
//     if(n === 1){
//         return 1
//     }
//     return n + addUpToRecursive(--n)
// }