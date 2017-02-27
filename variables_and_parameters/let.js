/**
 * var only has two types of scope: global and function
 */
var doWork = function(flag) {
    if (flag) {
        /**
         * this variable x is actually usable everywhere in this function beyond it's instantiation.
         *
         * var is automatically hoisted to the top of functions at interpretation time
         */
        var x = 3;

        /**
         * this is not hoisted, and therefore not available outside this scope
         */
        let y = 3
    }

    return x;
};


/**
 * This let variable will not be available outside of the for loop
 */
for(let i = 0; i < 5; i++) {
    //do work
}

