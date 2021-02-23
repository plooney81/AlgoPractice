//* Given an array of integers, write a function that returns an array of all permutations that can be formed.
//? perm([1]) => [1]
//? perm([1, 2]) => [[1, 2], [2, 1]]
//? perm([1, 2, 3]) => [[1, 2, 3], [1, 3, 2], [2, 3, 1], [2, 1, 3], [3, 1, 2], [3, 2, 1]]


const perm = (array) => {
    const foundPerms = [];

    const permHelper = (subArr, currentPerm) => {
        //Base Case
        if (subArr.length === 0){
            foundPerms.push(currentPerm)
        }
        for(let i = 0; i < subArr.length; i++){
            const newSubArr = subArr.slice(0, i).concat(subArr.slice(i + 1));
            const newCurrentPerm = currentPerm.concat(subArr[i]);
            permHelper(newSubArr, newCurrentPerm)
        }
    }

    permHelper(array, [])
    return foundPerms;
}

console.log(perm([1, 2, 3]));