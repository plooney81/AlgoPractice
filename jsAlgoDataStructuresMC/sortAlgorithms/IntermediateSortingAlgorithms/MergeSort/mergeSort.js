//* Merging Arrays Function
//? Create an empty array, take a look at the smallest values in each input array
//? while i and j haven't hit the end of their respective arrays:
    //? * if the value in the first array is smaller than the value in the second array, 
    //? push the value in the first array into our results and move on to the next value in the first array
    //? * if the value in the first array is larger than the value in the second array, push the value in the 
    //? second array into our results and move on to the next value in the second array
    //? * Once we exhaust one array, push in all remaining values from the other array.
//console.log(merge([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100]

const merge = (arr1, arr2) => {
    let onePoint = 0;
    let twoPoint = 0;
    let mergedArray = [];
    while (onePoint < arr1.length || twoPoint < arr2.length){
        if(onePoint === arr1.length){
            mergedArray = mergedArray.concat(arr2.slice(twoPoint))
            return mergedArray;
        }
        if(twoPoint === arr2.length){
            mergedArray = mergedArray.concat(arr1.slice(onePoint))
            return mergedArray;
        }
        if(arr1[onePoint] < arr2[twoPoint]){
            mergedArray.push(arr1[onePoint]);
            onePoint++;
        }else{
            mergedArray.push(arr2[twoPoint]);
            twoPoint++;
        }
    }
}

console.log(merge([1, 10, 50], [2, 14, 99, 100])); //[1, 2, 10, 14, 50, 99, 100]









//* Sorting Algorithms - Merge Sort
//?
//