//* Recursion - isPalindrome
//? Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome 
//? (reads the same forward and backward). Otherwise it returns false
// isPalindrome('awesome') //false
// isPalindrome('foobar') //false
// isPalindrome('tacocat') //true
// isPalindrome('amanaplanacanalpanama') //true
// isPalindrome('amanaplanacanalpandemonium') //false

const isPalindrome = (str) => {
    
    const reverse = (str) => {
        let newStr = '';
        if(str.length === 0) return newStr;

        newStr = str[str.length - 1] + reverse(str.slice(0, str.length - 1));
        return newStr;
    }

    return str === reverse(str);
}

console.log(isPalindrome('awesome')); //false
console.log(isPalindrome('tacocat')); //true
console.log(isPalindrome('foobar')); //false
console.log(isPalindrome('tacocat'));  //true
console.log(isPalindrome('amanaplanacanalpanama'));  //true
console.log(isPalindrome('amanaplanacanalpandemonium')); //false