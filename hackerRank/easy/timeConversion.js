//* Time Conversion
//? Given a time in 12 hour AM/PM format, convert it to military (24 hour) time
// timeConversion('12:01:00PM') // '12:01:00'
// timeConversion('12:01:00AM') // '00:01:00'

const timeConversion = (str) => {
    let newHour;
    if(str.slice(str.length - 2) === 'AM'){
        newHour = parseInt(str.slice(0, 2)) - 12;
    }else{
        newHour = parseInt(str.slice(0, 2));
        if(newHour < 12){
            newHour += 12;
        }
    }
    return newHour.toString().length === 1 ? `0${newHour.toString()}`+ str.slice(2, str.length - 2) : newHour.toString() + str.slice(2, str.length - 2);
}

console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));