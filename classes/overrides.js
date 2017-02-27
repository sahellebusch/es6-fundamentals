class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    doWork() {
        return "free!";
    }
}

class Employee extends Person {
    // employee "is-a" person

    constructor(name, title) {
        // forward the parent super call, have to call this else syntax error
        super(name);
        this._title = title;
    }

    //read only!
    get title() {
        return this._title;
    }

    doWork() {
        return `${this._name} is killin' it!`;
    }

    toString() {
        return `{name: ${this.name}, title: ${this.title}}`;
    }
}

let employee = new Employee("Sean", "Software Engineer");
let person = new Person("Brendan");

console.log(person.doWork()); // free! from person
console.log(employee.doWork()); // overridden, new result

console.log("person.toString() = " + person.toString());
console.log("employee.toString() = " + employee.toString());


