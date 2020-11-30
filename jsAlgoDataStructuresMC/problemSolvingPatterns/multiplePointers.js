//* EX.1 Multiple Pointers pattern - sumZero
//? Write a function called sumZero which accepts a sorted array of integers. (sorted lowest to highest)
//? The function should find the first pair where the sum is 0. Return an array
//? that includes both values that sum to zero or undefined if a pair does not exist.
// sumZero([-3, -2, -1, 0, 1, 2, 3]) //[-3, 3]
// sumZero([-2, 0, 1, 3]) //undefined
// sumZero([1, 2, 3]) //undefined

const sumZero = (array) => {
    let left = 0;
    let right = array.length - 1;
    while (left < right){
        let sum = array[right] + array[left];
        if(sum === 0){
            return [array[left], array[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++
        }
    }
}
//todo time complexity = O(N)
//todo space complexity = O(1)

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) //[-3, 3]
// console.log(sumZero([-2, 0, 1, 3])) //undefined
// console.log(sumZero([1, 2, 3])) //undefined

//* EX.2 Multiple pointers pattern - countUniqueValues
//? Implement a function called countUniqueValues, which accepts a sorted array, and counts
//? the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
// countUniqueValues([1, 1, 1, 1, 1, 2]) //2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) //7
// countUniqueValues([]) //0
// countUniqueValues([-2, -1, -1, 0, 1]) //4

const countUniqueValues = (arr) => {
    let left = 0;
    let right = 1;
    if(arr.length === 0){
        return left
    }
    while (right < arr.length){
        if(arr[left] === arr[right]){
            right++
        }else{
            left++
            arr[left] = arr[right]
        }
    }
    return left + 1
}
//todo time complexity = O(N)

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])) // 4

//? Alternatively
const countUniqueValues2 = (arr) => {
    if(arr.length === 0){
        return 0
    }
    let left = 0;
    for(let right = 1; right < arr.length; right++){
        if(arr[left] !== arr[right]){
            left++;
            arr[left] = arr[right]
        }
    }
    return left+1;
}
//todo time complexity = O(N)

// console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])) // 2
// console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
// console.log(countUniqueValues2([])) // 0
// console.log(countUniqueValues2([-2, -1, -1, 0, 1])) // 4


//? Recursively 

const countUniqueValues3 = (arr, left=0, right=1) => {
    if(arr.length === 0) return 0
    if(right === arr.length){
        return left + 1
    }else if(arr[left] === arr[right]){
        return countUniqueValues3(arr, left, ++right)
    }else{
        left++
        arr[left] = arr[right]
        return countUniqueValues3(arr, left, right)
    }
}
//todo time complexity = O(N) ... I think

console.log(countUniqueValues3([1, 1, 1, 1, 1, 2])) // 2
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])) // 7
console.log(countUniqueValues3([])) // 0
console.log(countUniqueValues3([-2, -1, -1, 0, 1])) // 4