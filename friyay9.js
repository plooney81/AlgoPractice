//! Warm up. Find the mean, median, and mode of an array.
// mean --> average of all the numbers
// median --> number at the exact middle of a sorted array
// mode --> number that appears the most times

// reduce sums the entire array, then we divide by the length to get the average
const meanOfArray = (arr) => arr.reduce((a, b) => a + b) / arr.length;

// ? when we give a the sort method a compare(a, b) function, 
// ? if it evaluates to less than zero, the sort() method sorts a to a lower index
// ? than b...i.e. A WILL COME FIRST

// ? if compare is greater than zero, the method will sort b to a lower index
// ? B WILL COME FIRST

// ? if the compare function returns zero, then the sort method leaves their positions unchanged.
const medianOfArray = (arr) => {
    // first we sort in ascending numeric order, then splice.
    return arr.sort((a, b) => a - b ).splice((arr.length / 2) - 1, 1);
}

const modeOfArray = (arr) => {
    const freqCounter = {};
    arr.forEach((number) => {
        freqCounter[number] = (freqCounter[number] ? freqCounter[number] + 1 : 1)
    })
    let maxValue = {'number': 0, 'frequency': 0}
    Object.keys(freqCounter).forEach(key => {
        if(freqCounter[key] > maxValue.frequency){
            maxValue.number = key;
            maxValue.frequency = freqCounter[key];
        }
    })
    return `the number ${maxValue.number} appeared ${maxValue.frequency} times`
}

const testArray = [4, 3, 1, 2, 2, 7, 9, 14, 2, 27, 400, 9, 1, 8];

console.log(meanOfArray(testArray));
// console.log(medianOfArray(testArray));
// console.log(modeOfArray(testArray));