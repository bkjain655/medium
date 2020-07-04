require('./index');
const moviesList = require('../movies_list.json');

describe('Filter with Numbers', () => {
    test('Filter for odd numbers', () => {
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        const data = numbers.filter(v => v % 2);
        expect(data).toEqual([1,3,5,7,9]);
        expect(data.length).toEqual(5);
        expect(data).toContain(1);
        expect(data).not.toContain(2);
    });
    test('Numbers divisible by 3', () => {
        const numbers = [1,2,3,4,5,6,7,8,9,10];
        const data = numbers.filter(v => v % 3 === 0);
        expect(data).toEqual([3,6,9]);
        expect(data.length).toEqual(3);
        expect(data).toContain(6);
        expect(data).not.toContain(7);
    });
    test('Empty Array', () => {
        const numbers = [];
        const data = numbers.filter(v => v % 2 === 0);
        expect(data).toEqual([]);
        expect(data.length).toEqual(0);
        expect(data).not.toContain(7);
    });
    test('Predicate has Exception', () => {
        const numbers = [];
        const data = numbers.filter(v => {
            throw 'Some exception occurred while cb processing'
        });
        expect(data).toEqual([]);
        expect(data.length).toEqual(0);
    });
    test('No Predicate is passed', () => {
        const numbers = [];
        expect(numbers.filter).toThrow(TypeError);
    });
    test('Predicate is not a function', () => {
        const numbers = [];
        expect(() => numbers.filter('predicate')).toThrowError();
    });    
});

describe('Filter with Objects', () => {
    test('Filter Movies by Year : 2016', () => {
        const data = moviesList.filter(v => v.Year === "2016");
        expect(data.length).toEqual(4);
        expect(data[0].Title).toContain('Doctor Strange');
    });
    test('Filter TV Serias whose seasons are more than 1', () => {
        const data = moviesList.filter(v => parseInt(v.totalSeasons,10) > 1);
        expect(data.length).toEqual(6);
        expect(data[0].Type).toContain('series');
        expect(data[0].Title).toContain('Game of Thrones');
    });
});


