//* Consider an array of n distinct integers.
//* George can swap any two elements of teh array any number of times. 
//* Determine and return the minimum number of swaps that should be performed in order to make the array sorted

const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivotElement = arr[start];
    let pivotIndex = start;

    for(let i = start+1; i <= end; i++){
        if(arr[i] < pivotElement){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}

const lilysHomework = (arr, left = 0, right = arr.length - 1, swaps = 0) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        //left
        lilysHomework(arr, left, pivotIndex - 1, pivotIndex > swaps ? pivotIndex : swaps);
        //right
        lilysHomework(arr, pivotIndex+1, right, pivotIndex > swaps ? pivotIndex : swaps);
    }
    return swaps;
}

console.log(lilysHomework([2, 5, 3, 1])); //2