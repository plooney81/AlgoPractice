//* Pivot Helper Function
//? Accepts three arguments: 1. array, 2. start index = 0, 3. end index = arr.length - 1
//? Grabs the pivot from the start of the array (here it will be the first element of the array)
//? Stores the current pivot index in a variable
//? loops over the entire array:
    //? if the pivot is greater than the element, increment the pivot index variable, and then swap the element at the pivot index
//? Swap starting element w/ the pivot index
//? return the pivot index

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivotIndex = start;
    let pivotElement = arr[start];
    for(let i = start + 1; i <= end; i++){
        if(pivotElement > arr[i]){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]]
    return pivotIndex;
}


//* Sorting Functions - Quick Sort
//? Call the pivot helper on the array
//? When the helper returns to you the updated pivot index, recursively call 
//? the pivot helper on the subarray to the left of the index, and the subarray to the right of the index
//? Your base case occurs when you consider a subarray with less than 2 elements.

const quickSort = (arr, left = 0, right = arr.length - 1) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    } 
    return arr;
}

console.log(quickSort([100, 10, 9, -3, 0, 5]));