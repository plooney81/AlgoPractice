//? Sliding Window - maxSubarraySum
//* Given an array of integers and a number, 
//* write a function called maxSubarraySum, which
//* finds the maximum sum of a subarray with the length of the number passed to the function
//* Note that a subarray must consists of consecutive elements from the original array.
//* In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
// maxSubarraySum([100, 200, 300, 400], 2) //700
// maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) //39
// maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) //5
// maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) //5
// maxSubarraySum([2, 3], 3) //null
//todo TC --> O(N)
//todo SC --> O(1)

const maxSubarraySum = (arr, subArrLength) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < subArrLength) return null;
    //* First we initialize max sum with the first subArrLength numbers
    for(let i = 0; i < subArrLength; i++){
        maxSum += arr[i]
    }
    //* Next we check the rest of the remaining values
    //* add on the new value to the tempSum, and subtracting the j - subArrlength - 1 value
    //* we then compare the new tempSum to the maxSum, it it is greater than the other maxSum, then we save the tempsum value as the new maxsum
    tempSum = maxSum
    for(let j = subArrLength ; j < arr.length; j++){
        tempSum = tempSum + arr[j] - arr[j - subArrLength]
        if(tempSum > maxSum){
            maxSum = tempSum
        }
    }
    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)) //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)) //5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) //5
console.log(maxSubarraySum([2, 3], 3)) //null
