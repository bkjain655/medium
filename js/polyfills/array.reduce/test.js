require('./index');
let movies_list = require('../movies_list.json');
const nums = [81,15,44,20,30];

const reduces = function(p, n) {
    if(Array.isArray(n)) {
        n.forEach(v => reduces(p,v));
    } else {
      p.push(n);
    }
    return p;
}

describe('Array Reduce On Numbers', () => {
    test('Get Sum of Numbers', () => {
        const sum = nums.reduce((acc, n) => acc + n, 0);
        expect(sum).toEqual(190)
        expect(nums.length).toEqual(5);
    })

    test('Get Sum of Numbers when accumulator is not passed', () => {
        const sum = nums.reduce((acc, n) => acc + n);
        expect(nums.length).toEqual(5);
        expect(sum).toEqual(190)
    })

    test('Flattening an Array of numbers', () => {
        let nestedArr = [[1,[2, [3,[4]], [5]]],[6,[7, [8,9]]]];
        let data = nestedArr.reduce(reduces, []);
        expect(data.every(v => !Array.isArray(v))).toEqual(true);
        expect(data[0]).toEqual(nestedArr[0][0]);
        nestedArr = [[1,2,3], [4,5,6]];
        data = nestedArr.reduce(reduces);
        expect(data.every(v => !Array.isArray(v))).toEqual(true);
        expect(data[2]).toEqual(nestedArr[0][2]);
    })
})

describe('Exception Cases', () => {
    test('Function is not passed', () => {
        expect(nums.reduce).toThrow(TypeError);
    })

    test('Function is string', () => {
        expect(() => nums.reduce('string fn')).toThrow(TypeError);
    })

    test('Callback has an exception', () => {
        expect(() => nums.reduce(v => { throw TypeError(); })).toThrow(TypeError);
    })
})

describe('Array.reduce polyfill on Objects', () => {
    test('Object from Array of Objects', () => {
        const data = movies_list.reduce((acc, curVal) => {
            return {
                ...acc,
                [curVal['Title']] : curVal['Runtime']
            }
        })
        expect(data['Luke Cage']).toEqual('55 min');
        expect(data['Gotham']).toEqual('42 min');
        expect(data['Gotham1']).toBeUndefined();
    })
})