//* Searching Algorithms - Naive String Search
//? Create a function that counts the # of times a smaller string appears in a longer string
// console.log(naiveString("wowomgzomg", "omg")) //2

const naiveString = (longStr, shortStr) => {
    let count = 0;

    for(let outIndex = 0; outIndex < longStr.length; outIndex++){
        for(let innIndex = 0; innIndex < shortStr.length; innIndex++){
            if(longStr[outIndex + innIndex] !== shortStr[innIndex]) break;
            if(innIndex == shortStr.length - 1)count++;
        }
    }
    return count;
}


console.log(naiveString("wowomgzomg", "omg")); //2
console.log(naiveString("lorie loled", "lol")); //1