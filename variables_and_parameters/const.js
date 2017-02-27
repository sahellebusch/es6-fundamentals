/**
 * const cannot be changed, and will actually throw syntax error if you
 * try to reassign its value
 */
const MAX_SIZE = 10;

let MAX_SIZE = 5; //syntax error


let x = 12;
const  y = 12;
var doWork = function () {

    /**
     * this is valid, the  inside the function scope "shadows" the outer x
     */
    var x = 10;

    /**
     * the let keyword here will also overshadow and not overwrite
     */
    let y = 7;

    return x
};

var result = doWork(); // this will result in 10 and not overwrite the outer let

