function student( config ){
	return function( target ){ Object.defineProperty( target.prototype, 'course', {value: () => config.course})}
}



@student({
	course: "Angular 2"
})
class Person{
	firstName;
	lastName;

	constructor( firstName, lastName ){
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let me = new Person( "Asim", "Hussain" );

console.log( me.course() );