import { arrayOfNumbers } from '../../utils/array.js';

describe('--- ARRAY OF NUMBERS', () => {
  test('No argument returns false', () => {
    expect(arrayOfNumbers([])).toBe(false);
  });

  test('Argument is not an array of numbers returns false', () => {
    expect(arrayOfNumbers('string is not a number')).toBe(false);

    expect(arrayOfNumbers(['string', {}, []])).toBe(false);
  });

  test('Empty array returns false', () => {
    expect(arrayOfNumbers([])).toBe(false);
  });

  test('Array of numbers returns true', () => {
    expect(arrayOfNumbers([1, 2, 3, 4, 5])).toBe(true);
  });
});