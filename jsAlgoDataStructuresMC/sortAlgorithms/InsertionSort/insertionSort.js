//* Sorting Algorithms - Insertion Sort
//? Start by picking the second element in the array
//? Now compare the second element with the one before it and swap if necessary
//? Continue to the next element and if it is in the incorrect order, iterate throught the sorted portion (i.e. the left side) to place the element in the correct place.
//? Repeat until the array is sorted.
// console.log(insertionSort([10, 3, 8, 9, 7, 2, 1])); // [1, 2, 3, 7, 8, 9, 10]

const swap = (arr, left, right) => {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    return arr;
}

//my solution
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let currentVal = i;
        for(let j = i - 1; j >= 0; j--){
            if(arr[currentVal] < arr[j]){
                arr = swap(arr, j, currentVal);
                currentVal = j;
            }
        }
    }
    return arr;
}

//his solution
const insertionSortTwo = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        arr[j + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSortTwo([10, 3, 8, 9, 7, 2, 1])); // [1, 2, 3, 7, 8, 9, 10]
