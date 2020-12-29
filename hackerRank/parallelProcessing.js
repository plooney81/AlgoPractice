const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}
const digitCount = (num) => num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;
const mostDigits = (arr) => {
    let maxDigit = 0;
    arr.forEach(num => {
        maxDigit = Math.max(maxDigit, digitCount(num));
    })
    return maxDigit;
}
const radixSort = (arr) => {
    const end = mostDigits(arr);
    for(let i = 0; i < end; i++){
        let buckets = [[], [], [], [], [], [], [], [], [], []];
        arr.forEach(num => {
            buckets[getDigit(num, i)].push(num);
        })
        arr = [].concat(...buckets);
    }
    return arr;
}
// files is an array of integers
// numCores is an integer
// limit is an integer

//minTime([4, 1, 3, 2, 8], 4, 1) //12
const minTime = (files, numCores, limit) => {
    let normalFiles = [];
    //find the files that can be optimized
    let optimized = [];
    files.forEach(file => {
        if(file % numCores === 0){
            optimized.push(file);
        }else{
            normalFiles.push(file);
        }
    })

    //if there are no files that can be optimized, return the original array added up
    if(optimized.length === 0) return files.reduce((a, b) => a + b);
    

    //sort the optimized array
    optimized = radixSort(optimized);
    for(let i = optimized.length - 1; i >= 0; i--){
        if(limit > 0){
            normalFiles.push(optimized[i]/numCores)
            limit--;
        }else{
            normalFiles.push(optimized[i])
        }
    }

    return normalFiles.reduce((a, b) => a + b);
}

const minTime2 = (files, numCores, limit, time = 0) => {
    files = radixSort(files);
    if(files.length === 0) return time;
    if(files[files.length - 1] % numCores === 0 && limit > 0){
        time += files[files.length - 1] / numCores;
        limit--;
    }else{
        time += files[files.length - 1];
    }
    return minTime2(files.slice(0, files.length - 1), numCores, limit, time);
}

console.log(minTime2([4, 1, 3, 2, 8], 4, 1)); //12