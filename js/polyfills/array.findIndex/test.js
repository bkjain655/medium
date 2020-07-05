require('./index');
const movies_list = require('../movies_list.json');
const nums = [9,3,4,11,5,7,1];

describe('Find Index with Numbers' , () => {
    test('Find Index of Even Number from Array of Numbers', () => {
        const evenNum = nums.findIndex(no => no % 2 === 0);
        expect(evenNum).toEqual(2);
        expect(evenNum).not.toBeUndefined();
    });

    test('Find Index of Even Number from Array which has 2 even numbers ', () => {
        nums.unshift(2);
        const evenNum = nums.findIndex(no => no % 2 === 0);
        expect(evenNum).toEqual(0);
        expect(evenNum).not.toBeUndefined();
        nums.shift();
    });
    
    test('Find Index of Number from Array which is % 10 ', () => {
        const evenNum = nums.findIndex(no => no % 10 === 0);
        expect(evenNum).toEqual(-1);
        expect(evenNum).not.toBeUndefined();
    });
});

describe('Exception Scenarios', () => {
    test('Function is not passed', () => {
        expect(nums.findIndex).toThrow(TypeError);
    })

    test('Function is string', () => {
        expect(() => nums.findIndex('string fn')).toThrow(TypeError);
    })

    test('Callback has an exception', () => {
        const data = nums.findIndex(v => {
            throw TypeError();
        });
        expect(data).toEqual(-1);
        expect(typeof data).toEqual('number');
    })
})

describe('Find Index on Array of Objects', () => {
    test('Index of the object whose title is Vikings', () => {
        const idx = movies_list.findIndex(m => m.Title === 'Vikings');
        expect(idx).toEqual(7);
        expect(idx).not.toBeUndefined();
        expect(idx).not.toEqual(-1);
    })
    test('Index of the object whose title is Does not exist', () => {
        const idx = movies_list.findIndex(m => m.Title === 'Vikings1');
        expect(idx).toEqual(-1);
        expect(idx).not.toBeUndefined();
    })
})