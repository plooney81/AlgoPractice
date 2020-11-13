//! Cake has one candle for each year a child has been alive, 
//! but they will only be able to blow out the candles that are the tallest. Count how many are the tallest

const birthdayCakeCandles = (candles) => {
    const map = {};
    candles.forEach(candle => {
        map[candle] = map[candle] ? map[candle] + 1 : 1
    });

    const max = Math.max(...Object.keys(map).map(number => parseInt(number)))
    return map[max]
}

console.log(birthdayCakeCandles([3, 2, 1, 3])) //2 because three is the largest number and it appears twice