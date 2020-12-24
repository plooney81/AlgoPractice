//* This challenge is simply to implement the pivot function

const pivot = (arr, start = 0, end = arr.length) => {
    let pivotElement = arr[start];
    let pivotIndex = start;
    for(let i = start + 1; i < end; i++){
        console.log(parseInt(arr[i]), parseInt(pivotElement));
        console.log(parseInt(arr[i]) < parseInt(pivotElement));
        if(parseInt(arr[i]) < parseInt(pivotElement)){
            pivotIndex++;
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
    return pivotIndex;
}

const quickSort = (arr, left=0, right=arr.length) => {
    if(left < right){
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

console.log(quickSort(['31415926535897', '1', '3', '10', '3', '5']))