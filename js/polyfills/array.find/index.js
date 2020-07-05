/**
 * Array Find method
 * Find method is used to find specific data from an Array.
 * e.x. : When we want to edit / view more details of the specific series from the List of Series
 * 
 * Find method is an ES6 method which is supported in all the latest browsers, but if you still want to support in Legacy browsers like IE8 or IE9 or IE10
 * Then we can use polyfills library.
 * 
 * Find takes a callback as an argument.
 * callback = (currentVal, index, arr) => currentVal
 * 
 * Find method returns the first element from an Array which satisified the condition else it returns undefined.
 */

Array.prototype.find = function(callback, thisArg) {
    if(!callback || typeof callback !== 'function') throw TypeError();
    const size = this.length;
    const that = thisArg || this;
    for(var i = 0; i < size; i++) {
        try {
            if(!!callback.apply(that,[this[i], i, this])) {
                return this[i];
            }
        } catch(e) {
            return undefined;
        }
    }
    return undefined;
}