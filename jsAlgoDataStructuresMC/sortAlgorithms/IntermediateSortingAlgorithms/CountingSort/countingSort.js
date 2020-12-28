//* Sorting Algorithms - Counting Sort

const countingSort = (arr) => {
    let minElement = 100;
    let maxElement = 0;
    //find the min/max element in the array;
    arr.forEach(num => {
        minElement = Math.min(minElement, num);
        maxElement = Math.max(maxElement, num);
    })
    // get the range of elements
    let elementRange = maxElement - minElement + 1;

    //initialize the count array and output array
    let countArray = new Array(elementRange).fill(0);
    let outputArray = new Array(arr.length);
    //store count of each element
    arr.forEach(num => {
        countArray[num - minElement] += 1;
    })
    //change count array so that it stores the positions of the element in
    for(let i = 1; i < countArray.length; i++){
        countArray[i] += countArray[i-1];
    }

    // build the outputArray
    arr.forEach(num => {
        outputArray[countArray[num - minElement] - 1] = num;
        countArray[num - minElement] -= 1;
    })
    return outputArray;
}

console.log(countingSort([3, 1, 1, 1, 6, 4]));