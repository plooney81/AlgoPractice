//* Recursion - Flatten
//? Write a function called flatten which accepts an array of arrays and returns a new array with all values flattened.
// flatten([1, 2, 3, [4, 5]]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1], [2], [3]]) //[1, 2, 3]
// flatten([[[1], [[[2]]], [[[[[[[3]]]]]]]]]) // [1, 2, 3]

const flatten = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        //need a test to see if we are on the lowest level
        if(Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]));
        }else{
            newArr.push(arr[i]);
        }
    }

    return newArr;
}



console.log(flatten([1, 2, 3, [4, 5]])) //[1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]]))// [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) //[1, 2, 3]
console.log(flatten([[[1], [[[2]]], [[[[[[[3]]]]]]]]]))// [1, 2, 3]