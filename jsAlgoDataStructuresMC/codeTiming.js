const {performance} = require('perf_hooks');

//! Easy approach
const addUpToSlow = (n) => {
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
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
    algo === 1 ? addUpToSlow(n) : addUpToFast(n)
    let t2 = performance.now();
    console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)
}

checkTime(1000000000, 1);
checkTime(1000000000, 2);
