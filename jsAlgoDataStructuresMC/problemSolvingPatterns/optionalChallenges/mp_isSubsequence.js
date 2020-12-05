//? Multiple Pointers - isSubsequence
//* Write a function called isSubsequence which takes in two strings and checks
//* whether the characters in the first string form a subsequence of the characters in the second string.
//* In other words, the function should check whether the characters in the first string appear somewhere 
//* in the second string, without their order changing.
// isSubsequence('hello', 'hello world') //true
// isSubsequence('sing', 'sting') //true
// isSubsequence('abc', 'abracadabra'); //TRUE
// isSubsequence('abc', 'acb') //false (order matters)
//todo TC => O(N + M)
//todo SC => O(1)

const isSubsequence = (str1, str2) => {
    let left = 0;
    let right = 0;
    while(left < str1.length){
        if(str1[left] === str2[right]){
            if(left > right) return false
            left++
            right++
        }else{
            right++
            if(right > str2.length) return false
        }
    }
    return true
}

console.log(isSubsequence('hello', 'hello world')); //true
console.log(isSubsequence('sing', 'sting')); //true
console.log(isSubsequence('abc', 'abracadabra')); //true
console.log(isSubsequence('abc', 'acb')); //false