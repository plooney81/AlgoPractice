//! Helper Method Recursion 
//? This function collects all of the odd values in an array.
//? Basically helper method recursion has a function wrapped around the recursive function that keeps track of some sort of data
//? In this case it is result array.
//* A little easier to understand then the pure recursion form...in my opinion

const collectOddValues = (arr) => {
    const result = [];

    const helper = (input) => {
        if(input.length === 0){
            return;
        }

        if(input[0] % 2 !== 0){
            result.push(input[0]);
        }

        helper(input.slice(1));
    }

    helper(arr);

    return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5])); //[1, 3, 5]


//! Pure Recursion...my way
//? This function collects all of the odd values in an array without using a helper method

const collectOddValuesPure = (arr, result = []) => {
    //Base case
    if(arr.length === 0) return result;
    
    if(arr[0] % 2 !== 0){
        result.push(arr[0]);
    }
    
    return collectOddValuesPure(arr.slice(1), result);
}
// console.log(collectOddValuesPure([1, 2, 3, 4, 5])); //[1, 3, 5]

//Another way

//! Pure Recursion...their way

const collectOddValuesPure2 = (arr) => {
    let newArr = [];
    
    if(arr.length === 0) return newArr;
    
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    
    newArr = newArr.concat(collectOddValuesPure2(arr.slice(1)));
    return newArr;
}
console.log(collectOddValuesPure2([1, 2, 3, 4, 5])); //[1, 3, 5]