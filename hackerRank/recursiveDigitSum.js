//* Recursive Digit Sum
//? We define super digit of an integer x using the following rules:
//? Given an integer, we need to find the super digit of the integer
//? If x has only 1 digit, then its super digit is x.
//? Otherwise, the super digit of x is equal tot he super digit of the sum of the digits of x
// superDigit(9875) 9+8+7+5=29
// superDigit(29) 2+9 = 11
// superDigit(11) 1 + 1 = 2
// superDigit(2) = 2

const superDigit = (n, k) => {
    if(n.length === 1 && k === 0) {
        return n;
    }else if(n.length === 1 && k !== 0){
        let mult = parseInt(n) * k;
        return superDigit(mult.toString(), 0)
    }
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        sum += parseInt(n[i]);
    }
    return superDigit(sum.toString(), k);
}

console.log(superDigit('9875', 4)); //8
console.log(superDigit('9875', 1)); //2
