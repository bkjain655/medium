/**
 * Array Map method
 * Map method is used to modify whole data in an Array.
 * e.x. : When we want to multiply/add each number in array by some number
 * 
 * Map takes a callbackFn as an argument.
 * callbackFn = (currentVal, index, arr) => currentVal
 * 
 * Map method returns a new Array after modifying the data with specified criteria, It will not modify original array
 */

Array.prototype.map = function(callbackFn, thisArg) {
    if(!callbackFn || typeof callbackFn !== 'function') throw TypeError();
    var that = thisArg || this;
    var newArr = [];
    for(var i = 0; i < this.length; i++) {
        newArr.push(callbackFn.apply(that,[this[i],i, this]));
    }
    return newArr;
}