//* Frequency Counter - sameFrequency
//? Write a function called sameFrequency. Given two positive integers, find out if the two numbers
//? have the same frequency of digits.
//? Solution must have TIME O(N) COMPLEXITY
// sameFrequency(182, 281) //true
// sameFrequency(34, 14) //false
// sameFrequency(3589578, 5879385) //true
// sameFrequency(22, 222) //false

const sameFrequency = (int1, int2) => {
    int1 = int1.toString()
    int2 = int2.toString()
    if(int1.length !== int2.length) return false
    const freqCounter = {};
    //* Initialize the object with the digits of the first integer
    int1.split('').forEach(int => {
        freqCounter[int] = ++freqCounter[int] || 1;
    });
    //* Compare using the second integer and subtracting
    for(let i = 0; i < int2.length; i++){
        let int = int2[i];
        freqCounter[int] = freqCounter[int] ? freqCounter[int] - 1 : - 1;
    }
    //* Look in the object, if any value is not zero, then the numbers do not match...return false.
    for(keys in freqCounter){
        if(freqCounter[keys] !== 0){
            return false
        }
        return true
    }
}

console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false