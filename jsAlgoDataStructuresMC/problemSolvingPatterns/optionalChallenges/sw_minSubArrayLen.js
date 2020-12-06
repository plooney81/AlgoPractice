//? Sliding Window - minSubArrayLen
//* Write a function called minSubArrayLen which accepts two parameters - an
//* array of positive integers and a positive integer. This function
//* should return the minimal length of a contiguous subarray of which the sum
//* is greater than or equal to the integer passed to the function. If there
//* isn't one, return 0 instead.
// minSubArrayLen([2, 3, 1, 2, 4, 3], 7) //2 bc [4, 3] is the smallest subarray
// minSubArrayLen([2, 1, 6, 5, 4], 9) //2 bc [5, 4] is the smallest subArray
// minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) //1 -> bc [62] is greater than 52


const minSubArrayLen = (arr, target) => {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLength = Infinity;
    while (start < arr.length){
        if(total < target && end < arr.length){
            total += arr[end]
            end++;
        }else if(total >= target){
            minLength = minLength < (end - start) ? minLength : (end - start);
            total -= arr[start];
            start++;
        }else{
            //* Need this in case the total is less than target, but end is greater than or equal to arr.length
            //* So we don't create an infinite loop.
            break;
        }
    }


    return minLength === Infinity ? 0 : minLength
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) //2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)) //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) //1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) //3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) //5