import { avg } from '../../utils/arith.js';

describe('--- AVG ---', () => {
  test('No arguments returns 0', () => {
    expect(avg()).toBe(0);
  });

  test('Argument is not an array of numbers returns undefined', () => {
    expect(avg('string is not a number')).toBeUndefined();

    expect(avg(['string', {}, [null]])).toBeUndefined();
  });

  test('Empty array as argument returns 0', () => {
    expect(avg([])).toBe(0);
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
