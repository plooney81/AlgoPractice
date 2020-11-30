//*  EX.1 Write a function called same, which accepts two arrays. 
// ? The function should return true if every value in the array has it's corresponding value squared in the second array. 
// ? The frequency of values must be the same.

const same = (array1, array2) => {
    //! Short circuit
    if(array1.length !== array2.length){
        return false
    }
    const array1Object = {};
    const array2Object = {};
    array1.forEach(element => {
        //! Look below for reasoning on why we need to use the ++varName syntax vs. varName++ syntax
        array1Object[element] = ++array1Object[element] || 1;
    });
    array2.forEach(element => {
        array2Object[element] = ++array2Object[element] || 1;
    });
    for(key in array1Object){
        if(array2Object[key ** 2] !== array1Object[key]){
            return false
        }
    }
    return true
}

// console.log(same([2, 3, 5, 3], [25, 4, 9, 9]))

//! Difference between ++varName and varName++:
//? The result returned by varName++ is the value of the variable before incrementing
//? The result returned by ++varName is the value of the variable after the increment is applied

//* EX.2 Anagrams
//? Given two strings, write a function to determine if the second string is an anagram of the first.
//? An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//todo freq counter way
const validAnagram = (str1, str2) => {
    if(str1.length !== str2.length){
        return false
    }
    const freqCounter = {};
    str1.split('').forEach(char => {
        freqCounter[char] = ++freqCounter[char] || 1;
    })
    // console.log(freqCounter);
    str2.split('').forEach(char => {
        freqCounter[char] = freqCounter[char] ? --freqCounter[char] : -1;
    })
    // console.log(freqCounter);
    for(key in freqCounter){
        if(freqCounter[key] !== 0){
            return false
        }
    }
    return true
}

//todo built in function way
// just need to loop over an see if they values match at each index of the arrays...not sure if this is faster, think eventually it would be O(nlogn) because of the sort function
// const validAnagram2 = (str1, str2) => {
//     if(str1.length !== str2.length){
//         return false
//     }
//     const array1 = str1.split('').sort();
//     const array2 = str2.split('').sort();
    
//     return array1 === array2
// }

console.log(validAnagram('', '')); //true
console.log(validAnagram('aaz', 'zza')); //false
console.log(validAnagram('anagram', 'nagaram')); //true
console.log(validAnagram('rat', 'car')); //false
console.log(validAnagram('qwerty', 'qeywrt')); //true
// console.log('-'.repeat(10));
// console.log(validAnagram2('', '')); //true
// console.log(validAnagram2('aaz', 'zza')); //false
// console.log(validAnagram2('anagram', 'nagaram')); //true
// console.log(validAnagram2('rat', 'car')); //false
// console.log(validAnagram2('qwerty', 'qeywrt')); //true