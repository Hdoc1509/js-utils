import { sum } from '../../utils/arith.js';

describe('--- SUM ---', () => {
  test('No arguments returns 0', () => {
    expect(sum()).toBe(0);
  });

  test('Argument is not an array of numbers returns undefined', () => {
    expect(sum('string is not a number')).toBeUndefined();

    expect(sum(['string', {}, [null]])).toBeUndefined();
  });

  test('Empty array as argument returns 0', () => {
    expect(sum([])).toBe(0);
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
