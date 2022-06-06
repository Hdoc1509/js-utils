const { avg } = require('../../utils/arith');

describe('--- Arithmetic Average ---', () => {
  test('No arguments returns undefined', () => {
    expect(avg()).toBeUndefined();
  });

  test('Argument is not an array of numbers returns undefined', () => {
    expect(avg('string is not a number')).toBeUndefined();

    expect(avg(['string', {}, [null]])).toBeUndefined();
  });

  test('Empty array as argument returns undefined', () => {
    expect(avg([])).toBeUndefined();
  });

  test('Average 4 and 6', () => {
    const numbers = [4, 6];

    expect(avg(numbers)).toBe(5);
  });

  test('Average many numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(avg(numbers)).toBe(5.5);
  });
});
