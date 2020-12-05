//? Multiple pointers - average pair
//* Write a function called averagePair
//* Given a sorted array of integers and a target average, determine if there is a pair of values in the array
//* Where the average of the pair equals the target average.
//* There may be more than one pair that matches the average target.
// averagePair([1, 2, 3], 2.5) //true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) //true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1) //false
// averagePair([], 4) //false

const averagePair = (arr, avg) => {
    if(arr.length === 0) return false
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let testAverage = (arr[left] + arr[right]) / 2
        if(testAverage === avg){
            return true
        }else if(testAverage < avg){
            left++;
        }else if(testAverage > avg){
            right--;
        }
    }
    return false;
}
//todo time complexity -> O(N) and space complexity -> O(1)

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)) //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) //false
console.log(averagePair([], 4)) //false
