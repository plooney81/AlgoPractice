//! Problem Solving steps
//* 1. Understand the problem
//* 2. Explore concrete examples
//* 3. Break it down
//* 4. Solve and Simplify
//* 5. Look back and refactor

//* Understanding the problem
//? When you get a new question you should:
//? 1. restate the problem in your own words
//? 2. explain what the inputs and outputs of the problem are?
//? 3. determine if the outputs can be determined from the inputs
//? 4. determine how the important pieces of data should be labeled for the problem

//todo EXAMPLE for Understanding the problem:
// Function that takes two #'s and returns their sum:
// 1. Add two numbers together
// 2. Ints, floats, string for large # ?
// 3. Depends
// 4. Function name (something like --> returnSum), num1, num2

//* Explore concrete examples
//? Steps
//? 1. Start w/ simple examples
//? 2. Progress to more complex examples
//? 3. Explore examples w/ empty inputs
//? 4. Explore examples w/ invalid inputs

//todo EXAMPLE for Explore concrete examples:
// Function which takes a string and returns counts of each char in the string
// 1. charCount('aaaa') // {a: 4}
// 2. charCount('my phone # is 8675309') // how to handle spaces or numbers?
// 3. charCount('') // how to handle empty inputs ???
// 4. charCount(null) // how to handle invalid inputs ???

//* Break it down
//? Steps:
//? Explicitly write out the steps that you need to take to solve the problem
    //? Doesn't need to be super detailed...just the basics

//todo EXAMPLE for Breaking it down:
// Function which takes a string and returns counts of each char in the string
// const charCount = (str) => {
    // make an object that we will return later
    // loop over the str, for each char
        // if the char is a number/letter and is a key in the object, add on to the count
        // if the char is a number/letter and is not a key in the object, initialize its count at 1
        // if the char is not a number/letter ... we don't care about it
    // return object at the end
// }

//* Solve/Simplify
const charCount = (str) => {
    const returnObject = {};
    str.toLowerCase().split('').forEach(char => {
        if(/[a-z0-9]/.test(char)){
            if(returnObject[char] > 0){
                returnObject[char]++;
            }else{
                returnObject[char] = 1;
            }
        }
    })
    return returnObject
}


//* Refactor
//? Can you make it better
//? Try and improve your code --> this can be readibility, or performance, or a completely different approach

//! instead of testing the regex for each char, why don't we filter out the characters we don't want, then loop over that.
//! Also can use a ternary to tighten
const charCount2 = (str) => {
    const returnObject = {};
    str.toLowerCase().split('').filter(char => /[a-z0-9]/.test(char)).forEach(char => {
        returnObject[char] = returnObject[char] ? returnObject[char] + 1 : 1
        //* Can even do this:
        //* returnObject[char] = ++returnObject[char] || 1;
    })
    return returnObject
}

//! another way
//! little fast to use the charCodeAt than the regex in this case
const charCount3 = (str) => {
    const returnObject = {};
    str.toLowerCase().split('').filter(char => {
        let code = char.charCodeAt(0)
        return (code > 47 && code < 58) || (code > 96 && code < 123) //? greater than 47 and less than 58 (numeric (0-9))
    }).forEach(filteredChar => {                                     //? greater than 96 and less than 123 (lower alpha (a-z))   
        returnObject[filteredChar] = ++returnObject[filteredChar] || 1; //? greater than 64 and less than 91 (upper alpha (A-Z))
    })
    return returnObject
}

const string = 'My number is 8675309';

console.log(charCount(string));
console.log(charCount2(string));
console.log(charCount3(string));