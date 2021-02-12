
//! Pete Question
// ?Given an array of random strings, return an array words that only has the letters e

// randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']
// eWords(randomStrings) --> 

const eWords = (inputArray) => {
    // Initialize our array that will house our strings with the letter e
    const returnArray = []
    // Initialize our two counters
    let wordIndex = 0;
    let charIndex = 0;

    // While loop that goes for the entirety of the inputArray
    while (wordIndex < inputArray.length){
        // if the charIndex is more than the length of the current word, then we go to the next word
        if (charIndex >= inputArray[wordIndex].length){
            // go to the next word and make our charIndex 0
            wordIndex++;
            charIndex = 0;
        // if the current char is 'e' then add that word to the return array
        }else if(inputArray[wordIndex][charIndex].toLowerCase() === 'e'){
            returnArray.push(inputArray[wordIndex]);
            // go to the next word, and make the char index 0 again
            wordIndex++;
            charIndex = 0;
        // if neither of the others are true, then simply increment charIndex
        }else{
            charIndex++;
        }
    }
    return returnArray
}

const randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']

// console.log(eWords(randomStrings));

//! Live Coding Question
//? Given an array of random strings, write a function that will return a new array with only the words that are 4 characters or more

const fourWords = (inputArray) => {
    const returnArray = []
    let wordIndex = 0;
    while (wordIndex < inputArray.length){
        if (inputArray[wordIndex].length >= 4){
            returnArray.push(inputArray[wordIndex])
        }
        wordIndex++;
    }
    return returnArray;
}

// console.log(fourWords(randomStrings))


//! Independent coding interview Questions
//? Write a function that takes two arguments, str1 and str2
//? Join these two strings together and reverse the new one

//* Built in reverse function
const addAndReverse = (str1, str2) => `${str1} ${str2}`.split('').reverse().join('');
// console.log(addAndReverse('hello', 'you'))


//* Without using the built in reverse function
const addAndReverse2 = (str1, str2) => {
    let bothStrings = `${str1} ${str2}`.split('');
    let mid = Math.floor(bothStrings.length/2);
    let left = 0;
    let right = bothStrings.length - 1;

    while (left < mid && right >= mid){
        [bothStrings[right], bothStrings[left]] = [bothStrings[left], bothStrings[right]]
        left++, right--;
    }
    return bothStrings.join('');
}

// console.log(addAndReverse2('hello', 'you'))

//? Write a function that given a string will always return the 4th char

const find4thChar = (inputString) => inputString.length >= 4 ? inputString[3] : 'too short of a string';

console.log(find4thChar('hello'))
console.log(find4thChar('hey'))
console.log(find4thChar('hi'))