//! THIS ISN'T A RECURSION PROBLEM, BUT MORE OF A GENERAL ALGORITHM PROBLEM
//? Given an array of distinct integers and a sum value. Find count of triplets with sum smaller than given sum value. Expected Time Complexity is O(n2)

const countTriplets1 = (array, sum) => {
    array.sort((a, b) => a - b)
    let count = 0;
    for(let i = 0; i < array.length - 2; i++){
        let j = i + 1;
        let k = array.length - 1;

        while(j < k){
            if(array[i]+array[j]+array[k] > sum){
                k--
            }else{
                // if the greatest val satisfies the condition, then we know that all 
                // the values between k and j will also satisfy the condition as well
                // if they are right next to each other, then it will only add one.
                count += k - j
                // console.log(i, j, k)
                j++
            }
        }
    }
    return count;
}

// console.log(countTriplets1([5, 7, 1, 19], 50));

//! Another triplet problem like above ^^
//? You are given an array and you need to find number of triplets of indices(i,j,k) such that the elements at those indices are in 
//? geometric progression for a given common ratio r and i<j<k. HackerRank link here --> https://www.hackerrank.com/challenges/count-triplets-1/problem?h_r=internal-search
//TODO Example: arr = [1,4,16,64] r = 4
//TODO answer: --> 2 ([1, 4, 16] and [4, 16, 64]) 

const countTriplets = (arr, r) => {
    // First we reorder the elements in the array in ascending order, this will help us with the i<j<k condition
    // arr.sort((a, b) => a - b) //! This actually isn't right, they don't want to you to reorder, keep it in original order.

    // Initialize a right hash table and a left hash table, because we will starting at index 0, all numbers will be in the right hash map and no numbers will be in the left hash map
    const leftHash = {};
    const rightHash = {};
    arr.forEach(numb => {
        leftHash[numb] = 0;
        rightHash[numb] = rightHash[numb] ? rightHash[numb] + 1 : 1;
    })

    //Initialize our counter variable
    let count = 0;
    arr.forEach(numb => {
        // We first need to subtract one from the count of the current number in the right hash table
        rightHash[numb] -= 1;
        // Then we find how many values to the left that satisfy itself/r and how many values to the right that satisfy itself * r
        let leftCount = leftHash[numb/r] ? leftHash[numb/r] : 0;
        let rightCount  = rightHash[numb*r] ? rightHash[numb*r] : 0;
        // Then we multiply them together, if we have 2 to the left and 2 to the right we would have a total of 4 new triplets
        count += rightCount*leftCount;
        // Then we add one to the current numbers value in the left hash table before we go to the next number
        // console.log(rightCount, leftCount);
        leftHash[numb] += 1;
    })

    return count
}
console.log(countTriplets([1, 2, 1, 2, 4], 2)) //3
console.log(countTriplets([1, 3, 9, 9, 27, 81], 3)) //6
console.log(countTriplets([1, 5, 5, 25, 125], 5)) //4