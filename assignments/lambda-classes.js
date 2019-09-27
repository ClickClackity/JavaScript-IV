// CODE here for your Lambda Classes

class Person {
    constructor(arg) {
        this.name = arg.name;
        this.age = arg.age;
        this.location = arg.location;
    }

    speak() {
        return `Hello my name is ${this.name}, and I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(arg) {
        super(arg);
        this.specialty = arg.specialty;
        this.favLanguage = arg.favLanguage;
        this.catchPhrase = arg.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }

    changeGrade(student) {
        let score = Math.round(Math.random() * 100);
        if (student.grade >= 100) {
            student.grade -= score;
            return `${score} points are removed from ${student.name}'s grade. Currently ${student.name} grade is ${student.grade} out of 100.`;
        } else {
            student.grade += score;
            return `${score} points have been added to ${student.name}'s grade. Now ${student.name}'s grade currently stands at ${student.grade} out of 100.`;
        }
    }   
}



class Student extends Person{
    constructor(arg){
        super(arg);
        this.previousBackground = arg.previousBackground;
        this.className = arg.className;
        this.favSubjects = arg.favSubjects;
        this.grade = arg.grade;
    }

    listSubjects() {
        this.favSubjects.map(item => console.log(item));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }

    graduate() {
        if (this.grade >= 70) {
            return `${this.name} has officially graduated! ${this.name}'s final grade was a ${this.grade}, congratulations!`;
        } else {
            let pointsNeeded = 70 - this.grade;
            this.grade += pointsNeeded;
            return `${this.name} was ${pointsNeeded} shy of graduating, after taking a second look at some of ${this.name}'s projects ${this.name}'s got enough points added to his grade to raise his grade to ${this.grade} allowing him to graduate, congrats!`;
        }
    }
}

class ProjectManager extends Instructor{
    constructor(arg){
        super(arg);
        this.gradClassName = arg.gradClassName;
        this.favInstructor = arg.favInstructor;
    }

    standup(channel) {
        console.log(`${this.name} announces to ${channel}, @${channel} standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

const andrew = new Instructor({
    name: 'Andrew',
    location: 'Missouri',
    age: 33,
    favLanguage: 'C++',
    specialty: 'React',
    catchPhrase: 'oh, woops'
});

const tom = new Student({
    name: 'Tom',
    location: 'LA',
    age: '22',
    previousBackground: 'Surfing',
    className: 'WEB24',
    favSubjects: ['Ruby', 'C#'],
    grade: 84
});

const vince = new Student({
    name: 'Vince',
    location: 'Boston',
    age: '31',
    previousBackground: 'Car Mechanic',
    className: 'WEB24',
    favSubjects: ['Python', 'Haskell', 'Lua'],
    grade: 63
});

const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'Chicago',
    age: 26,
    favLanguage: 'Solidity',
    specialty: 'JS',
    catchPhrase: 'Well, yeah, but I wanted to try it the complicated way',
    gradClassName: 'WEB13',
    favInstructor: 'Larry'
});


console.log(andrew.speak());
console.log(tom.speak());
console.log(vince.speak());
console.log(kevin.speak());

console.log(andrew.demo('some array methods'));
console.log(andrew.grade(tom, "JavaScript"));

console.log(vince.listSubjects());
console.log(tom.PRAssignment("CSS Flexbox"));
console.log(vince.sprintChallenge("Semantic HTML"));
console.log(kevin.standup("WEB24"));
console.log(kevin.debugsCode(tom, "Responsive Design"));

console.log(kevin.changeGrade(vince));
console.log(tom.graduate(vince));