//* Sorting Algorithms - Selection Sort
//? Places small values into sorted position, instead of first placing the largest values (bubble sort).
//? Each pass, finds the smallest value and puts it at the next spot in the array, first pass puts the smallest in the 0 slot, second pass puts it in the 1 slot etc.

const swap = (arr, left, right) => {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    return arr;
}

const selectionSort = (arr) => {

    for(let i = 0; i < arr.length; i++){
        let min = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(min !== i){
            arr = swap(arr, i, min);
        }
    }
    return arr;
}

console.log(selectionSort([10, 3, 8, 9, 7, 2, 1])); // [1, 2, 3, 7, 8, 9, 10]