//* Frequency Counter or Multiple pointers
//? Implement a function called areThereDuplicates which accepts a variable
//? number of arguments, and checks whether there are any duplicates among the arguments passed in.
//? You can solve this using the frequency counter pattern or the multiple pointers patter.
// areThereDuplicates(1, 2, 3) //false
// areThereDuplicates(1, 2, 2) //true
// areThereDuplicates('a', 'b', 'c', 'a')

const areThereDuplicates = (...args) => {
    //* Variable number of arguments
    if(args.length === 0) return false
    let left = 0;
    let right = args.length - 1;
    while (left < right){
        if(args[right] === args[left]){
            return true
        }else if(args[left] < args[right]){
            left++
        }else{
            right--
        }
    }
    return false;
}

//todo time complexity -> O(N)
//todo space complexity => O(1)

console.log(areThereDuplicates(1, 2, 3)) //false
console.log(areThereDuplicates(1, 2, 2)) //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) //true