/**
 * Array Filter methods
 * Filter method is used to filter the data from an Array.
 * e.x. : We have an numbers array and we want to find all Even Numbers or Odd Numbers or NUmber divisible by 3.
 * 
 * Filter method is supported in all the browsers, but if you still want to support in Legacy browsers like IE8 or IE9
 * Then we can use polyfills library.
 * 
 * Filter takes a predicateFn as an argument.
 * predicateFn = (currentVal, index, arr) => boolean
 * 
 * Filter method always returns a new Array & it won't modify the original array
 */
function filterFn(predicateFn){
    if(!predicateFn) return [];
    const results = [];
    this.forEach((val, index, array) => {
        let retVal = false;
        try {
            retVal = predicateFn.apply(this, [val, index, array])
        } catch(e) {
            retVal = false;
        }
        if(!!retVal){
            results.push(val);
        }
    });
    return results;
}
Array.prototype.filter = filterFn;