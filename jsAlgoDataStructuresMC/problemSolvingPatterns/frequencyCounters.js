// ? EX.1 Write a function called same, which accepts two arrays. 
// ? The function should return true if every value in the array has it's corresponding value squared in the second array. 
// ? The frequency of values must be the same.

//* My solution
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

console.log(same([2, 3, 5, 3], [25, 4, 9, 9]))

//! Difference between ++varName and varName++:
//? The result returned by varName++ is the value of the variable before incrementing
//? The result returned by ++varName is the value of the variable after the increment is applied