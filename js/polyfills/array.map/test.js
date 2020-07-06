require('./index');
let movies_list = require('../movies_list.json');
const nums = [9,3,7,5,4,1];

describe('Map with numbers', () => {
    test('Multiplying each number by 2', () => {
        const data = nums.map(v => v * 2);
        expect(data).toEqual([18,6,14,10,8,2])
        expect(nums).toEqual([9,3,7,5,4,1]);
        expect(data.length).toEqual(nums.length);
    })

    test('No Return in Callback', () => {
        const data = nums.map(v => {
            v * 2;
        })
        expect(data).toEqual([undefined,undefined,undefined,undefined,undefined,undefined])
        expect(nums).toEqual([9,3,7,5,4,1]);
        expect(data.length).toEqual(nums.length);
    })
})

describe('Exception Scenarios', () => {
    test('Function is not passed', () => {
        expect(nums.map).toThrow(TypeError);
    })

    test('Function is string', () => {
        expect(() => nums.map('string fn')).toThrow(TypeError);
    })

    test('Callback has an exception', () => {
        expect(() => nums.map(v => { throw TypeError(); })).toThrow(TypeError);
    })
})

describe('Object Scenarios', () => {
    test('Adding a property to every object', () => {
        movies_list = movies_list.map((v,i) => ({...v, displayOrder : i + 1}))
        expect(movies_list.length).toEqual(16);
        expect(movies_list[0].displayOrder).toEqual(1);
        expect(movies_list[15].displayOrder).toEqual(16);
        expect(movies_list[0].displayOrder).not.toBeUndefined();
    })

    test('Getting specific data from array of objects', () => {
        const data = movies_list.map(v => ({displayOrder: v.displayOrder, Title: v.Title}))
        expect(data.length).toEqual(movies_list.length);
        expect(data[0].displayOrder).toEqual(1);
        expect(data[15].displayOrder).toEqual(16);
        expect(data[0].Title).toEqual('Avatar');
        expect(data[15].Title).toEqual('Luke Cage');
        expect(data[15].Year).toBeUndefined();
        expect(data[10].totalSeasons).toBeUndefined();
        expect(data[5].Type).toBeUndefined();
    })
})