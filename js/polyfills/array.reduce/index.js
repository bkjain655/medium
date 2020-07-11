/**
 * Array's reduce method is used to reduce an array of data into a single value.
 * This value can be a primitive value or an Object.
 * 
 * Real time scenarios of Reduce is : 
 * 
 * 1. Getting Sum of numbers from array (Similarly average)
 * 2. Converting a array of Objects into a single object
 * 3. Flattening an array flat
 * 
 */

/** Polyfill for Array.reduce */
Array.prototype.reduce = function(callbackFn, initialValue) {
  if(!callbackFn || typeof callbackFn !== 'function') throw TypeError();
  var len = this.length;
  var i = 0;
  if(typeof initialValue === 'undefined' || initialValue === null) {
    initialValue =  this[0];
    ++i;
  } 
  for(; i < len; i++) {
    initialValue = callbackFn.apply(this, [initialValue, this[i], i, this])
  }
  return initialValue;
}