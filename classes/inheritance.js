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
}


let e1 = new Employee("Sean", "Software Engineer");
console.log(e1.name); // call the getter w/o parens
console.log(e1.title);
console.log(e1.doWork());

e1.name = "Brendan"; // calls the
console.log(e1.name);
e1.title = "Student"; // this will run, but nothing will change!
console.log(e1.title);


