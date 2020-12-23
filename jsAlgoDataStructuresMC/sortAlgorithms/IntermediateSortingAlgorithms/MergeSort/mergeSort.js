//* Merging Arrays Function
//? Create an empty array, take a look at the smallest values in each input array
//? while i and j haven't hit the end of their respective arrays:
    //? * if the value in the first array is smaller than the value in the second array, 
    //? push the value in the first array into our results and move on to the next value in the first array
    //? * if the value in the first array is larger than the value in the second array, push the value in the 
    //? second array into our results and move on to the next value in the second array
    //? * Once we exhaust one array, push in all remaining values from the other array.
//console.log(merge([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100]

//Original
const merge = (arr1, arr2) => {
    let onePoint = 0;
    let twoPoint = 0;
    let mergedArray = [];
    while (onePoint < arr1.length || twoPoint < arr2.length){
        if(onePoint === arr1.length) return mergedArray.concat(arr2.slice(twoPoint))
        if(twoPoint === arr2.length) return mergedArray.concat(arr1.slice(onePoint))
        if(arr1[onePoint] < arr2[twoPoint]){
            mergedArray.push(arr1[onePoint]);
            onePoint++;
        }else{
            mergedArray.push(arr2[twoPoint]);
            twoPoint++;
        }
    }
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100]

//Recursively
const merge2 = (arr1, arr2) => {
    let mergedArray = [];
    //base cases
    if(arr1.length === 0) return mergedArray.concat(arr2.slice(0));
    if(arr2.length === 0) return mergedArray.concat(arr1.slice(0));
    if(arr1[0] < arr2[0]){
        mergedArray.push(arr1[0])
        mergedArray = mergedArray.concat(merge2(arr1.slice(1), arr2));
    }else{
        mergedArray.push(arr2[0])
        mergedArray = mergedArray.concat(merge2(arr1, arr2.slice(1)));
    }
    return mergedArray;
}

// console.log(merge2([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100]



//* Sorting Algorithms - Merge Sort
//? Break up the array into halves until you have arrays that are empty or have one element
//? Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are ack at the full length of the array.
//? Once the array has been merged back together, return the merged array
//

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let half = Math.floor((arr.length) / 2);
    let left = mergeSort(arr.slice(0, half));
    let right = mergeSort(arr.slice(half));
    return merge(left, right);
}

console.log(mergeSort([2, 10, 5, 7, 20, 15, 22]));