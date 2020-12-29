class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }

    outputName(){
        console.log(`Your name is ${this.firstName} ${this.lastName}`);
    }
}

let studentOne = new Student('Pete', 'Looney', 10);
let studentTwo = new Student('Blah', 'Blarg', 0);

studentOne.outputName();
studentTwo.outputName();