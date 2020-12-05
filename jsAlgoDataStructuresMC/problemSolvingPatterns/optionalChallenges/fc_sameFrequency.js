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
    //* If the value key doesn't exist, or if the value is zero, then it will return false
    //* zero is falsy, if it value is zero already, then the values don't match 
    //* (i.e. it would make it -1) which means one has more of that specific integer than the other.
    for(let i = 0; i < int2.length; i++){
        let int = int2[i];
        if(freqCounter[int]){
            freqCounter[int] -= 1
        }else{
            return false
        }
    }
    return true
}
//todo O(N) time complexity

console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false