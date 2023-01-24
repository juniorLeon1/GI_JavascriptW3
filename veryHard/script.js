// creates a class with a constructor method then adds an exercise and fetchJob method 
// that work like functions. Class and constructor work like objects, but when written this way
// you can assign the values to each key later, and create multiple of the same objects with the 
// same keys but different values.

class Person {
    constructor(name, job, age){
        this.name = name;
        this.job = job;
        this.age = age;
    }

    exercise() {
        console.log(`Get strong so you can be the next Kratos`)
    }

    fetchJob() {
        console.log(`${this.name} is a ${this.job}`)
    }
}

//testing
const person1 = new Person("John", "Backend Engineer", 20);

console.log(person1.name);
console.log(person1.job);
console.log(person1.age);
person1.exercise();
person1.fetchJob();

// programmer class that inherits properties from the person class and also adds in a 
// languages key and a busy poperty that is set to true by default
class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages;
        this.busy = true;
    }

// completeTask and acceptNewTask reassign false and true depending on wether the 
// programmer is not busy or busy respectively
    completeTask() {
        this.busy = false;
    }

    acceptNewTask() {
        this.busy = true;
    }

// tells if programmer is busy based on the previous two methods
    offerNewTask() {
        if (this.busy){
            console.log(`Sorry but ${this.name} is already busy with another task`)
        } else {
            console.log(`${this.name} is ready for another task`)
        }
    }

// pushes a new string into the language array of the programmer
    learnLanguage(language) {
        this.languages.push(language);
    }

// lists all of the languages in the programmer's array
    listLanguages() {
        console.log(this.languages)
    }
}

//testing
const programmer1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);

console.log(programmer1.name);
console.log(programmer1.job);
console.log(programmer1.age);
console.log(programmer1.languages);
console.log(programmer1.busy);
programmer1.exercise();
programmer1.fetchJob();

// complete task is applied and reassigns the busy value to false and then console log
// if they are busy after they completed a task --> expected output: false
programmer1.completeTask();
console.log(programmer1.busy);

programmer1.acceptNewTask();
console.log(programmer1.busy);

programmer1.offerNewTask();
programmer1.completeTask();
programmer1.offerNewTask();

// has to learn languages one by one with the learnLanguage method since there is only one 
// parameter in the method function: learnLanguage(language){} <-- "language" is the only parameter
programmer1.learnLanguage("HTML");
programmer1.learnLanguage("CSS");
programmer1.learnLanguage("JavaScript");
programmer1.listLanguages();