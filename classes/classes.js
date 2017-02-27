class Employee {

    // constructor - a function that is invoked every time a new object is called
    constructor(name, title) {
        this._name = name; // read/write property
        // this.name = name; //this would call the name setter
        this._title = title; // read only, no setter!
    }

    // this sets up Employee.prototype.doWork
    doWork() {
        return "complete!";
    }

    // this is a keyword getter
    get name() {
        return this._name; // if you were to do return _name, it'll go looking for a global variable, no bueno
    }

    set name(newName) {
        this._name = newName;
    }

    get title() {
        return this._title;
    }
}


let e1 = new Employee("Sean", "Software Engineer");
console.log(e1.name); // call the getter w/o parens
console.log(e1.title);

e1.name = "Brendan"; // calls the
console.log(e1.name);
e1.title = "Student"; // this will run, but nothing will change!
console.log(e1.title);

