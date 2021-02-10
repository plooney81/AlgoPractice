//! 1. Find the longest word in a string
const returnLongestString = str => {
    let longest = 0;
    str.split(' ').forEach((word) => {longest = longest < word.length ? word.length : longest})
    return longest;
}

// console.log(returnLongestString('The quick brown fox jumped over the lazy dog'));

//! 2. Contains duplicates...check if the array has duplicates
//    somethingFound = arr.find((element, innerIndex) => element === number && innerIndex !== index);
const hasDuplicates = arr => {
    let somethingFound
    arr.forEach((number, index) => {
        arr.forEach((secondNumber, secondIndex) => {
            somethingFound = number === secondNumber && index !== secondIndex ? 1 : somethingFound;
        })
    })
    return (somethingFound ? true : false)
}

// console.log(hasDuplicates([1, 2, 3, 4, 4, 5, 7])) // expected true
// console.log(hasDuplicates([1, 2, 3])) // expected false

//! 3. Which indexes equal target...return index of two numbers out of an array that equal the target number given
const indexEqualTarget = (arr, target) => {
    let holdsIndex = [];
    for (let outIndex = 0; outIndex < arr.length; outIndex++){
        let outNumber = arr[outIndex];
        for (let innIndex = outIndex + 1; innIndex < arr.length; innIndex++){
            let innNumber = arr[innIndex];
            if(outNumber + innNumber === target){
               holdsIndex = [outIndex, innIndex];
               return holdsIndex;
            }
        }
    }
    return null;
}

// console.log(indexEqualTarget([2, 3, 11, 7], 9))


//! 4. Reverse a string
const reversString = string => string.split('').reverse().join('');

// console.log(reversString('hello world'));

//!Given an array of random strings, Write a function that will return a new array with only the words that contain the letter 'e'.
// randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']

const eWords = (arrayOfWords) => {
    let index = 0
    let charIndex = 0;
    let returnArray = [];
    while (index < arrayOfWords.length){
        if (charIndex >= arrayOfWords[index].length){
            index++, charIndex = 0;
        } else if (arrayOfWords[index][charIndex].toLowerCase() === 'e'){
            returnArray.push(arrayOfWords[index]);
            index++, charIndex = 0;
        }else{
            charIndex++;
        }
    }
    return returnArray;
}

const eWords2 = (arrayOfWords) => {
    let returnArray = [];

    if(arrayOfWords.length === 0) return returnArray;
    if(arrayOfWords[0].toLowerCase().includes('e')){
        returnArray.push(arrayOfWords[0])
    }
    returnArray = returnArray.concat(eWords2(arrayOfWords.slice(1)));
    return returnArray
}

let randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot'];
console.log(eWords(randomStrings));
console.log(eWords2(randomStrings))