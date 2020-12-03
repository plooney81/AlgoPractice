//* EX.1 Sliding Window pattern - maxSubarraySum
//? Write a function called maxSubarraySum which accepts an array of integers and a number called n.
//? The function should calculate the maximum sum of n consecutive elements in the array.
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
// maxSubarraySum([4, 2, 1, 6], 1) // 6
// maxSubarraySum([4, 2, 1, 6, 2], 4) //13
// maxSubarraySum([], 4) //null

const maxSubarraySum = (arr, num) => {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    //? Sum up the first num numbers
    for(let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    //? instead of re-adding numbers that we have already added, 
    //? we simply subtract the number off of the front and add the number that is now in the window.
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = maxSum > tempSum ? maxSum : tempSum;
    }
    return maxSum
}
//todo time complexity = O(N)

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) //6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) //13
console.log(maxSubarraySum([], 4)) //null