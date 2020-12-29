//seeing if alphabetical order is smaller
//charCodeAt can tell us if the char is smaller

const possibleChanges = (usernames) => {
    let answerArray = new Array(usernames.length).fill('NO');
    for(let i = 0; i < usernames.length; i++){
        let left = usernames[i].length - 2;
        let right = usernames[i].length - 1;
        while(left < right){
            if(usernames[i].charCodeAt(left) > usernames[i].charCodeAt(right)){
                answerArray[i] = 'YES';
                left = right;
            }else if(left > 0){
                left--;
            }else if(left === 0 && right > 0){
                right--;
                left = right - 1;
            }else{
                left = right;
            }
        }
        
    }

    return answerArray;
}

console.log(possibleChanges(['hydra'])) //YES
console.log(possibleChanges(['foo', 'bar', 'baz'])) //NO YES YES