//! 1. Given a value n, find the factorial of the number using recursion

const factorial = (n) => n === 1 || n === 0 ? 1 : n * factorial(n - 1)

// console.log(factorial(4));

//! 2. Recursive Function that does a count down. Starts at x then counts down to one

const countDown = (n) => {
    console.log(n);
    return n === 1 ? 1 : countDown(n - 1); 
}

// countDown(5)

//! 3. Sum all numbers. It will take a number and return the sum of all numbers from 1 up to the number passed in.

const sumRange = (n, sum=0) => {
    if(n === 0){
        return sum
    }else{
        return sumRange(n - 1, sum + n)
    }
}

// console.log(sumRange(3));

//! 4. product of an array. Write a function that takes in an array of numbers and returns the product of them all.

const productOfArray = (array, sum=1) => {
    if(array.length === 0){
        return sum
    }else{
        let number = array.pop()
        return productOfArray(array, sum * number)
    }
}

// console.log(productOfArray([1, 2, 3, 10]))

