//? Sliding Window - findLongestSubstring
//* Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring with all
//* distinct characters.
// findLongestSubstring('') //0
// findLongestSubstring('rithmschool') //7
// findLongestSubstring('thisisawesome') //6
// findLongestSubstring('thecatinthehat') //7
// findLongestSubstring('bbbbbb') //1
// findLongestSubstring('longestsubstring') //8
// findLongestSubstring('thisisshowwedoit') //6

const findLongestSubstring = (str) => {
    //Loop through the string
    //if a character is distinct than the previous --> I'm thinking freqCounter?
        //it is added to the substring length
    //else the length is either saved or not to the maxLength variable. --> if the current length is greater than the maxLength
        //Then it will be saved into the maxLength variable
    //Return maxLength
    if(str.length === 0) return 0
    let startIndex = 0;
    let endIndex = 0;
    let maxLength = 0;
    let currentCharCount = {};
    while(startIndex < str.length){
        let currentChar = str[endIndex]
        if(currentCharCount[currentChar]){
            maxLength = maxLength > (endIndex - startIndex) ? maxLength : (endIndex - startIndex);
            currentCharCount[startIndex] = 0;
            startIndex = str.indexOf(currentChar) + 1;
        }else{
            currentCharCount[currentChar] = 1
            endIndex++;
        }
    }
    return maxLength;
}

const findLongestSubstring2 = (str) => {
    str = str.split('');
    if(str.length === 0) return 0;
    let startIndex = 0;
    let maxLength = 0;
    let currentSlice = [];
    //* Loop over the values in the string and push onto whatever the current slice happens to be
    //* If the most recent value happens to have already been in the string, then we do a few things:
        //* first we change the startIndex to be the index of the first instance of that duplicate character + 1
        //* Then decide if the current slice - the newly duplicated character happens to be the largest subString array we have found yet.
        //* Then we cut out every up the first duplicate value + 1 by doing slice(startIndex) which will take a slice of everything from 
        //* startIndex to currentSlice.length - 1.
    for(let endIndex = 0; endIndex < str.length; endIndex++){
        let indexOf = currentSlice.indexOf(str[endIndex]);
        currentSlice.push(str[endIndex])
        if(indexOf !== -1){
            startIndex = indexOf + 1;
            maxLength = maxLength > currentSlice.length - 1 ? maxLength : currentSlice.length - 1
            currentSlice = currentSlice.slice(startIndex)
        }
    }
    return maxLength > currentSlice.length ? maxLength : currentSlice.length
}

//* Similar to my initial approach, but instead of saving the number of times the character has been there, 
//* This saves the most recent index of the char in the string, if it is before the start of the most recent
//* substring, then it doesn't matter, because of the statement on line 73
const findLongestSubstring3 = (str) => {
    let longest = 0;
    let seen = {};
    let start = 0;

    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if(seen[char]){
            start = Math.max(start, seen[char]);
        }
        longest = Math.max(longest, i - start + 1);
        seen[char] = i + 1;
    }
    return longest;
}

// console.log(findLongestSubstring2('')) //0
console.log(findLongestSubstring2('rithmschool')) //7
console.log(findLongestSubstring2('thisisawesome')) //6
console.log(findLongestSubstring2('thecatinthehat')) //7
console.log(findLongestSubstring2('bbbbb')) //1
console.log(findLongestSubstring2('longestsubstring')) //8
console.log(findLongestSubstring2('thisishowwedoit')) //6
