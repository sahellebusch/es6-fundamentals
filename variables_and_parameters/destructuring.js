let x = 2;
let y = 3;

// assigns y to x and x to y
[x, y] = [y, x];

/**
 * You can also instantiate two variables using let and destructuring
 *
 * here, you get two let-scoped variables a and b
 */
let [a, b] = [7, 8];


//real life example

var getPeople = function() {
    let myarray = ["Sean", "Brendan", "Danny"];
    return myarray;
};

let [sean, brendan, danny] = getPeople();

console.log(sean + brendan + danny);