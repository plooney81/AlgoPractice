// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. 
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// function sumZero(array){
//     let returnArray = [];
//     for(let outIndex = 0; outIndex < array.length; outIndex++){
//         for(let innerIndex = 0; innerIndex < array.length; innerIndex++){
//             if(array[outIndex] + array[innerIndex] === 0 && outIndex !== innerIndex) {
//                 returnArray.push(array[outIndex], array[innerIndex])
//             }
//         }
//     }
//     if(returnArray[0]){return returnArray.slice(0,2)}else{return undefined};
// }
// console.log(sumZero([-3,-2,-1,0,3,4,4,5]));
// console.log(sumZero([-1,5,4,3,2]));



// Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string ''.
function longestCommonPrefix(array){
    //Counts the characters for each word, saves into an object
    let charCounter = {};
    for(let outIndex = 0; outIndex < array.length; outIndex++){
        for(let innStringIndex = 0; innStringIndex < array[outIndex].length; innStringIndex++){
            if(charCounter[array[outIndex][innStringIndex]]){
                charCounter[array[outIndex][innStringIndex]] += 1;
            }else{
                charCounter[array[outIndex][innStringIndex]] = 1;
            }
        }
    }

    // checks that each key is at the same length in each word of the array, if they are, then it adds that key 'i.e. the character' to the longest prefix
    let longestPrefix = [];
    // console.log(charCounter);
    let keysArray = Object.keys(charCounter);
    for(let index = 0; index < keysArray.length; index++){
        if(charCounter[keysArray[index]] === array.length){
            let counter = 0;
            for(let mainArrayIndex = 0; mainArrayIndex < array.length; mainArrayIndex++){
                if(keysArray[index] === array[mainArrayIndex][index]){
                    counter++;
                }
            }
            if(counter === array.length){
                longestPrefix.push(keysArray[index]);
            }else{
                break
            }   
        }else{
            break
        }
    }

    if(longestPrefix[0] !== array[0][0] || longestPrefix[0] !== array[1][0] || longestPrefix[0] !== array[2][0]){
        return '';
    }else{
        return longestPrefix.join('');
    }
    
}

console.log(longestCommonPrefix(["flo","flop","flower"]));