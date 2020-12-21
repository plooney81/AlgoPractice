//* Searching Algorithms - Naive String Search
//? Create a function that counts the # of times a smaller string appears in a longer string
// console.log(naiveString("wowomgzomg", "omg")) //2

const naiveString = (longStr, shortStr) => {
    let count = 0;

    for(let outIndex = 0; outIndex < longStr.length; outIndex++){
        for(let innIndex = 0; innIndex < shortStr.length; innIndex++){
            console.log(longStr[outIndex], shortStr[innIndex]);
            if(longStr[outIndex] !== shortStr[innIndex]){
                break;
            }else{
                if(innIndex == shortStr.length - 1){
                    count++;
                }else{
                    outIndex++;
                }
            }
        }
    }
    return count;
}


console.log(naiveString("wowomgzomg", "omg")); //2