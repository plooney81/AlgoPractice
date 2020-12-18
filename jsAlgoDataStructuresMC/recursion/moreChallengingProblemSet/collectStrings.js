//* Recursion - collectStrings
//? Write a function called collectStrings which accepts an object and 
//? returns an array of all the values in the object that have a typeof string
// const obj = {
//     stuff: "foo",
//     data: {
//         val: {
//             thing: {
//                 info: "bar",
//                 moreInfo: {
//                     evenMoreInfo: {
//                         weMadeIt: "baz"
//                     }
//                 }
//             }
//         }
//     }
// }

// console.log(collectStrings(obj)); // ["foo", "bar", "baz"])

//! pure recursion way
const collectStrings = (obj) => {
    let newArr = [];
    for(let key in obj){
        // need to find a way to see if the value is also another object...if it is then we call the function again with the nested object as the parameter
        // if it isn't an object, and is a string...then we push that string into our array
        if(typeof obj[key] === 'object' && obj[key] !== null){
            newArr = newArr.concat(collectStrings(obj[key]))
        }else if(typeof obj[key] === 'string'){
            newArr.push(obj[key]);
        }
    }

    return newArr;
}

//! helper function way
// more readable and intuitive in my opinion, but longer
const collectStrings2 = (obj) => {
    let newArr = [];

    const helper = (obj) => {
        for(let key in obj){
            if(typeof obj[key] === 'object' && obj[key] !== null){
                helper(obj[key]);
            }else if(typeof obj[key] === 'string'){
                newArr.push(obj[key]);
            }
        }
    }

    helper(obj);

    return newArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])