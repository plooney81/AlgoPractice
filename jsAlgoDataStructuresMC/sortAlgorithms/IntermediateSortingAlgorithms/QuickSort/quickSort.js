//* Pivot Helper Function
//? Accepts three arguments: 1. array, 2. start index = 0, 3. end index = arr.length - 1
//? Grabs the pivot from the start of the array (here it will be the first element of the array)
//? Stores the current pivot index in a variable
//? loops over the entire array:
    //? if the pivot is greater than the element, increment the pivot index variable, and then swap the element at the pivot index
//? Swap starting element w/ the pivot index
//? return the pivot index

const pivot = (arr, start = 0, end = arr.length) => {
    let pivotIndex = start;
    let pivotElement = arr[start];
    for(let i = start + 1; i < end; i++){
        if(pivotElement > arr[i]){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
    return pivotIndex;
}


const quickSort = (arr) => {
    // if(arr.length <= 1) return arr;
    // let half = Math.floor((arr.length) / 2);
    // let left = mergeSort(arr.slice(0, half));
    // let right = mergeSort(arr.slice(half));
    // return merge(left, right);
}

console.log(pivot([5, 2, 1, 8, 4, 7, 6, 3]));