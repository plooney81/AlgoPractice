const {performance} = require('perf_hooks');

//! Easy approach
const addUpToSlow = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}

//! Recursive approach
const addUpToRecursive = (n, sum=0) => {
    if(n === 0){
        return sum
    }else{
        return addUpToRecursive(n - 1, sum + n)
    }
}

//! Math approach
const addUpToFast = (n) => (n * (n + 1)) / 2

// console.log(addUpToSlow(6));
// console.log(addUpToFast(6));

//! Timing function
//* algo 1 is the easy(slow) approach
//* algo 2 is the math approach
const checkTime = (n, algo) => {
    let t1 = performance.now();
    if(algo === 1){
        addUpToSlow(n)
    }else if(algo === 2){
        addUpToRecursive(n)
    }else{
        addUpToFast(n)
    }
    let t2 = performance.now();
    console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)
}

checkTime(10000, 1);
checkTime(10000, 2);
checkTime(10000, 3);
