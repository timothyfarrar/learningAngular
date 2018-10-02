class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
    }
    name() {
        return `${this.firstName} ${this.lastName}`;
    }
    whoAreYou() {
        return `Hi I'm ${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    constructor(firstname, lastname, course) {
        super(firstname, lastname);
        this.course = "";
        this.course = course;
    }
    whoAreYou() {
        return `${super.whoAreYou()} and I'm taking the course on ${this.course}`;
    }
    test() {
        return this.firstName;
    }
}
let enrollee = new Student("Timothy", "Farrar", "ES6");
console.log(enrollee.test());
