const { arrayOfStrings } = require('../../utils/array');

describe('--- Array of strings', () => {
  test('No argument returns false', () => {
    expect(arrayOfStrings()).toBe(false);
  });

  test('Argument is not an array of strings returns false', () => {
    expect(arrayOfStrings(1)).toBe(false);

    expect(arrayOfStrings([{}, [1, 2, 3], null])).toBe(false);
  });

  test('Empty array returns false', () => {
    expect(arrayOfStrings([])).toBe(false);
  });

  test('Array of strings returns true', () => {
    expect(
      arrayOfStrings(['string', 'word', 'random', 'example of text'])
    ).toBe(true);
  });
});
