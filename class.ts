interface Human{
	firstName: string;
	lastName: string;
	age?: number;
	isLate?(time: Date): Function;
}


class Person implements Human{
	age = 0;
	constructor(public firstName, public lastName ){
		
	}

	name(){
		return `${this.firstName} ${this.lastName}`;
	}

	whoAreYou(){
		return `Hi I'm ${this.firstName} ${this.lastName}`;
	}

}

class Student extends Person{
	course = "";

	constructor(firstname, lastname, course){
		super( firstname, lastname );
		this.course = course;
	}

	whoAreYou(){
		return `${super.whoAreYou()} and I'm taking the course on ${this.course}`;
	}

	test () {
		return this.firstName;
	}
}

let enrollee = new Student( "Timothy", "Farrar", "ES6" );

console.log( enrollee.test() );