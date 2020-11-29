// ? EX.1 Write a function called same, which accepts two arrays. 
// ? The function should return true if every value in the array has it's corresponding value squared in the second array. 
// ? The frequency of values must be the same.

const same = (array1, array2) => {
    const array1Object = {};
    const array2Object = {};
    array1.forEach(element => {
        array1Object[element] = ++array1Object[element] || 1;
    });
    array2.forEach(element => {
        array2Object[element] = ++array2Object[element] || 1;
    });
    for(key in array1Object){
        if(array2Object[Math.pow(key, 2)] !== array1Object[key]){
            return false
        }
    }
    return true
}

console.log(same([2, 3], [4, 10]))