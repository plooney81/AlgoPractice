//! 1.Writing factorial Iteratively

//? This function finds the factorial of n using an iterative approach
//* Factorial of a positive integer n, denoted by n! is the product of all positive integers less than or equal to n.
const iterativeFactorial = (n) => {
    let total = 1;
    for(let i = n; i > 1; i--){
        total *= i;
    }
    return total;
}

// console.log(iterativeFactorial(5)); //120
// console.log(iterativeFactorial(4)); //24
// console.log(iterativeFactorial(3)); //6


//! 2. Writing factorial Recursively

//? This function find the factorial of n using a recursive approach
//* Factorial of a positive integer n, denoted by n! is the product of all positive integers less than or equal to n.
const recursiveFactorial = (n) => n === 1 ? 1 : n * recursiveFactorial(--n); // has to be --n and not n-- b/c the first returns n - 1 to the function, while the second doesn't...it actually gives the function n and then next go around it subtracts one.

// console.log(recursiveFactorial(5)); //120
// console.log(recursiveFactorial(4)); //24
// console.log(recursiveFactorial(3)); //6
console.log(recursiveFactorial(7)); //5040



//^ is the same...this one is a little easier to follow
const recursiveFactorial2 = (n) => {
    if(n === 1){
        return 1;
    }
    return n * recursiveFactorial2(--n);
}


// console.log(recursiveFactorial2(5)); //120
// console.log(recursiveFactorial2(4)); //24
// console.log(recursiveFactorial2(3)); //6