//* Sorting Algorithms - Bubble Sort
//? Create a function called bubble sort that takes an array of numbers and sorts them from smallest to largest.
//? Must utilize bubble sort algorithm where the largest value "bubbles" to the top

// Function for swapping that will help clean up our actual sorting code.
const swap = (arr, right, left) => {
    [arr[right], arr[left]] = [arr[left], arr[right]];
    return arr;
}

const bubbleSort = (arr) => {
    for(let i = arr.length - 1; i >= 0; i--){
        let noSwaps = true;
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]) {
                arr = swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([10, 3, 8, 9, 7, 2, 1])); // [1, 2, 3, 7, 8, 9, 10]