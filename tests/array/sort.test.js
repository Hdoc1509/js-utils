import { sort } from '../../src/array.js';
import { toIncludeSameMembers } from 'jest-extended';

expect.extend({ toIncludeSameMembers });

describe('--- Sort array of numbers or strings ---', () => {
  const numsArr = [1, 4, 5, 7, 2, 4, 6, 12, 5];
  const wordsArr = ['letter', 'fruit', 'monitor', 'javascript'];

  test('No arguments returns undefined', () => {
    expect(sort()).toBeUndefined();
  });

  test('First argument is not an array of numbers or strings returns undefined', () => {
    expect(sort('string')).toBeUndefined();

    expect(sort(69)).toBeUndefined();
  });

  test('Second argument is not a valid order returns undefined', () => {
    expect(sort(numsArr, 0)).toBeUndefined();

    expect(sort(numsArr, 'not allowed order')).toBeUndefined();
  });

  test('Ascendent order by default correctly', () => {
    expect(sort(numsArr)).toEqual([1, 2, 4, 4, 5, 5, 6, 7, 12]);

    expect(sort(wordsArr)).toEqual([
      'fruit',
      'javascript',
      'letter',
      'monitor',
    ]);
  });

  test('Descendent order correctly', () => {
    expect(sort(numsArr, -1)).toEqual([12, 7, 6, 5, 5, 4, 4, 2, 1]);

    expect(sort(wordsArr, -1)).toEqual([
      'monitor',
      'letter',
      'javascript',
      'fruit',
    ]);
  });

  test('Random order correctly', () => {
    expect(sort(numsArr, 'r')).toIncludeSameMembers(numsArr);

    expect(sort(wordsArr, 'r')).toIncludeSameMembers(wordsArr);
  });
});
