//* Radix Sort Helper Functions - getDigit
//? this function returns the digit of a number at a given place
// getDigit(12345, 0) //5
// getDigit(12345, 1) //4
// getDigit(12345, 2) //3

const getDigit = (num, place) => {
    let str = num.toString()
    return place > str.length - 1 ? 0 : parseInt(str.slice(str.length - 1 - place, str.length - place));
}
// Math way
const getDigit2 = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

//* Radix Sort Helper Functions - digitCount
//? this function returns the number of digits that are in the number given
// digitCount(1); //1
// digitCount(24); //2
// digitCount(234); //3

const digitCount = (num) => num.toString().length; 
//Math way
const digitCount2 = (num) => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;


//* Radix Sort Helper Functions - mostDigits
//? this function returns the number of digits in the largest numbers of the inputted list
// mostDigits([1234, 56, 7]) //4
// mostDigits([1, 1, 11111, 1]) //5
// mostDigits([12, 34, 56, 78]) //2

const mostDigits = (arr) => {
    let maxDigit = 0;
    arr.forEach(num => {
        if(digitCount(num) > maxDigit){
            maxDigit = digitCount(num)
        }
    })

    return maxDigit;
}
