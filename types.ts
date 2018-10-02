let decimal: number = 6;
let done: boolean = false;
let color: string = "blue";
let list: number[] = [1,2,4];

let fun: Function = function (){ console.log( "hello" );}

function returnNumber(): number{
	return 1;
}

enum Direction {
	Up,
	Down,
	Left,
	Right
}

let go: Direction;

go = Direction.Up;

console.log( Direction )

class Person{};

let person: Person;
let people: Person[];

let notsure: any = 1;
notsure = "hello";

function yougetNothing(): void{
	console.log( ' NOTHING ' );
}

let value: any = "My Name";

(<string>value).length;



class xAudio {}
class xVideo {}
class xLink {}
class xTest {}

class Post<T>{
	content: T;
}
let videoPost: Post<xVideo>;


let answer;

answer = 42;

answer = "43"



