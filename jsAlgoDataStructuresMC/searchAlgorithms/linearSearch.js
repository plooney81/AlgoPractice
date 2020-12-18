//* Searching Algorithms - Linear Search
//? This function accepts an array and a value
//? Loop through the array and check if the current array element is equal to the value
//? If it is, return the index of the element that matches
//? If it isn't found, then return negative one

const linearSearch = (arr, val) => {
    for(let index = 0; index < arr.length; index++){
        if(arr[index] === val){
            return index;
        }
    }
    return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5], 4)) //3
console.log(linearSearch([1, 2, 3, 4, 5], 7)) //-1
