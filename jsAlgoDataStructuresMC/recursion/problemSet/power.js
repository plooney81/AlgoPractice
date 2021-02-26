//* Recursion - Power
//? Write a function called power which accepts a base and an exponent.
//? The function should return the power of the base to the exponent.
//? This function should mimic the functionality of Math.pow() - don't worry about negative bases and exponents.
// power(2, 0) //1
// power(2, 2) //4
// power(2, 4) //16

const power = (base, exponent) => {
    if(exponent === 0) return 1;
    return base * power(base, --exponent);
}


// const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, --exponent);

console.log(power(2, 0)); //1
console.log(power(2, 2)); //4
console.log(power(2, 4)); //16


const iterativePower = (base, exponent) => {
    let total = 1
    for(let i = 0; i < exponent; i++){
        total *= base;
    }
    return total
}

console.log(iterativePower(2, 4))

