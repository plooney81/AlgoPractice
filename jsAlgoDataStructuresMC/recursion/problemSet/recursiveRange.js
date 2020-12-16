//* Recursion - recursiveRange
//? Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function
// recursiveRange(6) //21
// recursiveRange(10) //55

// const recursiveRange = (n) => {
//     if(n === 1) return 1;

//     return n + recursiveRange(--n);
// }

//refactor
const recursiveRange = (n) => n === 1 ? 1 : n + recursiveRange(--n);



console.log(recursiveRange(6)) //21
console.log(recursiveRange(10)) //55