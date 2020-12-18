//* Recursion - stringifyNumbers
//? Write a function called stringifyNumbers which takes in an object and 
//? finds all of the values which are numbers and converts them to strings.
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
// stringifyNumbers(obj)
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

const stringifyNumbers = (obj) => {
    for(let key in obj){
        if(isNaN(obj[key])){
            if(typeof obj[key] === 'object'){
                stringifyNumbers(obj[key]);
            }
        }else if(typeof obj[key] === 'number'){
            obj[key] = obj[key].toString();
        }
    }

    return obj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log(stringifyNumbers(obj));