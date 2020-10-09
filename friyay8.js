// 1. Given an array of 0s and 1s, count the number of "islands of 1s"

const islandsCount = (array)=>{
    let count = 0;
    array.forEach((number, index) => {
        (number === 0 && array[index+1] === 1)? count += 1 : null;
        // if(number=== 0 && array[index+1] === 1){
        //     count += 1
        // }
    });
    return count;
}

// console.log(islandsCount([0,1,1,0,1,0,1,1,1,0,1,0,1]));

// 2. Say you have an array for which each element is the price
// of a given stock and the index represents the day.
// If you were only permitted to complete at most one
// transaction (i.e., buy one and sell one share of the
// stock), design an algorithm to find the maximum profit.
// Note that you cannot sell a stock before you buy one.

const findMaxProfit = (priceArray)=>{
    let largestNumb = 0;
    for(let outIndex = 0; outIndex < priceArray.length; outIndex++){
        for(let innerIndex = outIndex+1; innerIndex < priceArray.length; innerIndex++){
            number = priceArray[innerIndex] - priceArray[outIndex];
            (number>largestNumb) ? largestNumb = number : null;
        }
    }
    return largestNumb;
}

const test = [8,7,1,3,5];
// console.log(findMaxProfit(test));


// 3. Say you have the same arrays of single stock prices.
// Design an algorithm to find the maximum profit, but you
// may complete as many transactions as you like (i.e., buy
// one and sell one share of the stock multiple times).
// Note: You may not engage in multiple transactions at the
// same time (i.e., you must sell the stock before you buy
// again).

const findMaxProfitMultDays = (priceArray)=>{
    let arrayOfDifferences = [];
    for(let outIndex = 0; outIndex < priceArray.length; outIndex++){
        for(let innerIndex = outIndex+1; innerIndex < priceArray.length; innerIndex++){
            number = priceArray[innerIndex] - priceArray[outIndex];
            arrayOfDifferences.push(
                {
                    number: number,
                    outIndex: outIndex,
                    innerIndex: innerIndex
                }
            );
        }
    }
    let lastOutIndex = 0;
    let lastInnerIndex = 0;
    let largestNumb = 0;
    console.log(arrayOfDifferences);
    arrayOfDifferences.forEach(object=>{
        if(object.number > largestNumb){
            if(object.outIndex === lastOutIndex){
                largestNumb = object.number;
                lastInnerIndex = object.innerIndex;
                lastOutIndex = object.outIndex;
            }else if(object.outIndex > lastOutIndex && object.innerIndex <= lastInnerIndex){
                largestNumb += object.number;
                lastInnerIndex = object.innerIndex;
                lastOutIndex = object.outIndex;
            }
        }
    });
    return largestNumb;
}
const test2 = [7,1,5,3,6,4];
const test3 = [1,2,3,4,5];
console.log(findMaxProfitMultDays(test2));
console.log(findMaxProfitMultDays(test3));