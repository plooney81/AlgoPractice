//* Recursion - productOfArray
//? write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1, 2, 3]) //6
// productOfArray([1, 2, 3, 10]) //60

const productOfArray = (arr) => {
    let total = 1;

    if(arr.length === 0){
        return total;
    }
    total = arr[0] * productOfArray(arr.slice(1));
    return total;
}

console.log(productOfArray([1, 2, 3])) //6
console.log(productOfArray([1, 2, 3, 10])) //60