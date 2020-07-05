require('./index');
const movies_list = require('../movies_list.json');
const nums = [9,3,7,5,4,1];

describe('Find with Numbers' , () => {
    test('Find Even Number from Array of Numbers', () => {
        const evenNum = nums.find(no => no % 2 === 0);
        expect(evenNum).toEqual(4);
        expect(evenNum).not.toBeUndefined();
    })
});

describe('Exception Scenarios', () => {
    test('Function is not passed', () => {
        expect(nums.find).toThrow(TypeError);
    })

    test('Function is string', () => {
        expect(() => nums.find('string fn')).toThrow(TypeError);
    })

    test('Callback has an exception', () => {
        const data = nums.find(v => {
            throw TypeError();
        });
        expect(data).toBeUndefined();
        expect(typeof data).toEqual('undefined');
    })
})

describe('Find on Array of Objects', () => {
    test('Viewing Specific Series Details', () => {
        const data = movies_list.find(m => m.Title === 'Vikings');
        expect(data.Title).toEqual('Vikings');
        expect(data).not.toBeUndefined();
        expect(data.Type).toEqual('series');
    })

    test('Editing Specific Series Details', () => {
        const data = movies_list.find(m => m.Title === 'Vikings');
        expect(data.Title).toEqual('Vikings');
        expect(data).not.toBeUndefined();
        expect(data.Type).toEqual('series');
    })
})