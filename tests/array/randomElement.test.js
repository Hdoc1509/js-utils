const { randomElement } = require('../../utils/array');
const { toBeOneOf } = require('jest-extended');

expect.extend({ toBeOneOf });

describe('--- Random Element ---', () => {
  test('No argument returns undefined', () => {
    expect(randomElement()).toBeUndefined();
  });

  test('Returns random element of an array correctly', () => {
    const myArray = [1, 'letter', { prop: 'value', nullValue: null }];

    expect(randomElement(myArray)).toBeOneOf(myArray);
  });
});
