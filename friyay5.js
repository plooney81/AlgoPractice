
// 1).
const someArray = [1, 2, 3];

// function checkArray(input){
//     return Array.isArray(input);
// }

// console.log(checkArray(someArray));

// 2). write a function to get the first n elements of an array
function getTheNElements(n, array){
    if(n > array.length){
        console.log('Cant do that');
    }else{
        return array.slice(0 , n);
    }
}

console.log(getTheNElements(1, someArray));

// 3). write a function to program to join all elements of the following array into a string.

console.log(someArray.join(' '));

// 4). Write a JS program which accept a number as input and insert deashes between each number
