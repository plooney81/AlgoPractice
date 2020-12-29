class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
}

let studentOne = new Student('Pete', 'Looney', 10);
let studentTwo = new Student('Blah', 'Blarg', 0);

console.log(studentOne);
console.log(studentTwo);