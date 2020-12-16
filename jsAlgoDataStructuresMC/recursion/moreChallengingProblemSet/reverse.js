//* Recursion - Reverse
//? Write a recursive function called reverse which accepts a string and returns a new string in reverse
// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

const reverse = (str) => {
    let newStr = '';
    if(str.length === 0) return newStr;

    newStr += str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    return newStr;
}

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'