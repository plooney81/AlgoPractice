//Given a list of unsorted integers, arr, find the pair of elements that have the smallest absolute difference between them.
//If there are multiple pairs, find them all.

//function that returns the digit at the given spot, if the number doesn't have that spot, then return 0
const getDigit = (num, index) => {
    return Math.floor(Math.abs(num) / Math.pow(10, index)) % 10;
}

//function that outputs the numbers num of digits
const returnDigits = (num) => num.toString().length

//function that looks through an array and returns the num with the max number of digits
const returnMaxDigits = (arr) => {
    let maxDigit = 0;
    arr.forEach(num => {
        maxDigit = Math.max(maxDigit, returnDigits(num));
    })
    return maxDigit;
}

const radixSort = (arr) => {
    //find out how many digits the largest number has
    let mostDigits = returnMaxDigits(arr);
    //loop most digits number of times
    for(let i = 0; i < mostDigits; i++){
        // create buckets
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        // put each number into a bucket based on their i digit
        for(let j = 0; j < arr.length; j++){
            buckets[getDigit(arr[j], i)].push(arr[j]);
        }
        arr = [].concat(...buckets);
    }
    return arr;
}

const closestNumbers = (arr) => {
    const [negArr, posArr] = [[], []];
    arr.forEach(num => {
        num < 0 ? negArr.push(num) : posArr.push(num);
    })
    const [negSort, posSort] = [radixSort(negArr), radixSort(posArr)];
    const sortedArr = negSort.reverse().concat(posSort);
    let diff = Infinity;
    let pairs = [];

    let left = 0;
    let right = 1;
    while(right <= sortedArr.length){
        let sum = sortedArr[right] - sortedArr[left];
        if(sum < diff){
            diff = sum;
            pairs = [sortedArr[left], sortedArr[right]];
        }else if(sum === diff){
            pairs.push(sortedArr[left], sortedArr[right])
        }
        left++;
        right++;
    }
    return pairs;
}

console.log(closestNumbers([-20, -31916237, -357920, -3620601, 7374819, 30]))//[-20, 30]