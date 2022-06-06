const { sum } = require('../../utils/arith');

describe('--- Sum of numbers ---', () => {
  test('No argument returns undefined', () => {
    expect(sum()).toBeUndefined();
  });

  test('Argument is not an array of numbers returns undefined', () => {
    expect(sum('string is not a number')).toBeUndefined();

    expect(sum(['string', {}, [null]])).toBeUndefined();
  });

  test('Empty array as argument returns undefined', () => {
    expect(sum([])).toBeUndefined();
  });

  test('Add 1 + 2 correctly', () => {
    const numbers = [1, 2];

    expect(sum(numbers)).toBe(3);
  });

  test('Add many numbers correctly', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(sum(numbers)).toBe(55);
  });
});
