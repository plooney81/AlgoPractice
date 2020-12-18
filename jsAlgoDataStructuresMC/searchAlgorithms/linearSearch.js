//* Searching Algorithms - Linear Search
//? This function accepts an array and a value
//? Loop through the array and check if the current array element is equal to the value
//? If it is, return the index of the element that matches
//? If it isn't found, then return negative one
//? DO NOT USE INDEXOF TO IMPLEMENT THIS FUNCTION!
// console.log(linearSearch([10, 15, 20, 25, 30], 15)); //1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); //5
// console.log(linearSearch([100], 100)); //0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); //-1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); //-1
// console.log(linearSearch([100], 200)); //-1

//Initial
const linearSearch = (arr, val) => {
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === val){
            return index;
        }
    }
    return -1;
}

//Refactor w/ recursion
const linearSearch2 = (arr, val, counter = 0) => {
    if(arr.length === 0) return -1;
    if(arr[0] === val) return counter;
    return linearSearch2(arr.slice(1), val, ++counter);
}


console.log(linearSearch2([10, 15, 20, 25, 30], 15)); //1
console.log(linearSearch2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); //5
console.log(linearSearch2([100], 100)); //0
console.log(linearSearch2([1, 2, 3, 4, 5], 6)); //-1
console.log(linearSearch2([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); //-1
console.log(linearSearch2([100], 200)); //-1