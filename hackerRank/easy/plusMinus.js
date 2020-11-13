//! Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
//! Print the decimal value of each fraction on a new line with 6 places after the decimal

const plusMinus = (arr) => {
    const map = {'1': 0, '-1': 0, 'zero': 0};
    arr.forEach(number => {
        if(number > 0){
            map['1'] = map['1'] ? map['1'] + 1 : 1;  
        }else if(number < 0){
            map['-1'] = map['-1'] ? map['-1'] + 1 : 1;
        }else{
            map['zero'] = map['zero'] ? map['zero'] + 1 : 1;
        }
    });
    
    // We want the zero to be the last element, and 1 to be the first, so we set -1 if either element is a zero, and if neither are, then normal b - a 
    // b - a works if we want the largest number on the right ... a - b works if we want the largest element on the right.
    const keys = Object.keys(map).sort((a, b) => b - a );

    keys.forEach(key => {
        const factor = Math.pow(10, 6);
        const decimal = parseFloat(Math.round((map[key] / arr.length) * factor) / factor).toFixed(6);
        console.log(decimal);
    })
}

plusMinus([1, 1, 0, -1, -1]) // 0.400000 \n 0.400000 \n 0.200000
// plusMinus([-4, 3, -9, 0, 4, 1]) // 0.500000 \n 0.333333 \n 0.166667
