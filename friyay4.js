// Number 1

function greatestCommonDivisor(firstNumb, secondNumb){
    let firstNumbDivisor = [];
    for (let index = 0; index <= firstNumb; index++){
        if (firstNumb % index === 0){
            firstNumbDivisor.push(index);
        }
    }
    let secondNumbDivisor = [];
    for (let index = 0; index <= secondNumb; index++){
        if (secondNumb % index === 0){
            secondNumbDivisor.push(index);
        }
    }
    console.log(firstNumbDivisor);
    console.log(secondNumbDivisor);


    let gcd = 0;
    for (let outerIndex = 0; outerIndex < firstNumbDivisor.length; outerIndex++){
        for (let innerIndex = 0; innerIndex < secondNumbDivisor.length; innerIndex++){
            if (firstNumbDivisor[outerIndex] === secondNumbDivisor[innerIndex] && firstNumbDivisor[outerIndex] > gcd){
                gcd = firstNumbDivisor[outerIndex];
            }
        }
    }

    return gcd;
}

// console.log(greatestCommonDivisor(12, 144));

// Number 2

function grades(score){
    const possibleGrades = [
        {
            top: 100,
            bottom: 90,
            actualGrad: "You got a A 😀"
        },
        {
            top: 89,
            bottom: 80,
            actualGrad: "You got a B 👍"
        },
        {
            top: 79,
            bottom: 70,
            actualGrad: "You got a C"
        },
        {
            top: 69,
            bottom: 60,
            actualGrad: "You got a D"
        },
        {
            top: 59,
            bottom: 0,
            actualGrad: "You got a d"
        }
    ]

    for (let index = 0; index < possibleGrades.length; index++){
        if (score <= possibleGrades[index].top && score >= possibleGrades[index].bottom){
            console.log(possibleGrades[index].actualGrad)
        }
    }
}
grades(85);
// Number 3

function isLeapYear(year){
    if (year % 4 === 0 && year > 1752){
        console.log('It is a leap year')
    }
}

// Number 4
function pigLatin(word){
    let newWord = "";
    let consonants = {
            single: ["p", "b", "t", "d", "c", "g", "f", "v", "s", "z", "m", "n", "h", "l", "r", "w", "j", "y"],
            double: ["th", "sh", "ch"],
            vowels: ["a", "e", "i", "o", "u", "y"] 
        };

    // begin with consonant sounds
    for (let index = 0; index < consonants.double.length; index++){
        if (consonants.double[index] ===  word.slice(0, 2)){
            for (let vowelIndex = 0; vowelIndex < consonants.vowels.length; vowelIndex++){
                if (consonants.vowels[vowelIndex] === word[2]){
                    newWord += word.slice(2);
                    newWord += `${word.slice(0, 2)}ay`
                    return newWord;
                }
            }
        }else{
            for(let singleIndex = 0; singleIndex < consonants.single.length; singleIndex++){
                if (consonants.single[singleIndex] === )
            }
        }
    }
}

console.log(pigLatin("that"));