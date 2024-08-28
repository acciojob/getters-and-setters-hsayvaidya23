//complete this code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	get name(name) {
		console.log(this.name);
	}
	set age(newage) {
		this.age = newage;
	} 
}

class Student extends Person {
	super(name);
	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	super(name);
	teach() {
		console.log(`${this.name} is teaching`);
	}
}

const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30;
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
