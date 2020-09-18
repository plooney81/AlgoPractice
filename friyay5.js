
// 1).
const someArray = [1, 2, 3];


// function checkArray(input){
//     return Array.isArray(input);
// }

// console.log(checkArray(someArray));

// 2). write a function to get the first n elements of an array
function getTheNElements(stopIndex, array){
    if(stopIndex > array.length){
        console.log('Cant do that');
    }else{
        return array.slice(0 , stopIndex);
    }
}

console.log(getTheNElements(3, someArray));