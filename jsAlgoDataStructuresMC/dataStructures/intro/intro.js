class Student{
    constructor(firstName, lastName, year){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        this.tardies = 0;
        this.scores = [];
    }

    outputName(){
        console.log(`Your name is ${this.firstName} ${this.lastName}`);
    }
    markLate(){
        this.tardies += 1;
        if(this.tardies >= 3){
            console.log('You are expelled');
        }
        console.log(`${this.firstName} ${this.lastName} has been late ${this.tardies} times`);
    }
    addScore(score){
        this.scores.push(score);
        console.log(this.scores);
    }
    calculateAverage(){
        console.log(this.scores.reduce((a, b) => a + b) / this.scores.length);
    }
    static EnrollStudents(){
        return "Enrolling Students";
    }
}

let studentOne = new Student('Pete', 'Looney', 10);
let studentTwo = new Student('Blah', 'Blarg', 0);

// studentOne.outputName();
// studentTwo.outputName();

// studentOne.markLate();
// studentOne.markLate();
// studentOne.markLate();
// studentTwo.markLate();

studentTwo.addScore(92);
studentTwo.addScore(87);
studentTwo.addScore(95);
studentTwo.calculateAverage();

console.log(Student.EnrollStudents());

class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));