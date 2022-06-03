/**
 * Check if an array is an array of numbers, returning true or false as appropiate
 * @param  {Array<Number>}  arr Array to check
 */
export const arrayOfNumbers = (arr = []) => {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) return false;

  const notNumbers = arr.filter((el) => typeof el !== 'number');

  if (notNumbers.length > 0) return false;

  return true;
};

/**
 * Check if an array is an array of strings, returning true or false as appropiate
 * @param  {Array<String>}  arr Array to check
 */
export const arrayOfStrings = (arr = []) => {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) return false;

  const notStrings = arr.filter((el) => typeof el !== 'string');

  if (notStrings.length > 0) return false;

  return true;
};

/**
 * Returns a random element from an array
 * @param  {Array} arr Array from which an element will be retrieved
 */
export const randomElement = (arr) => {
  if (!Array.isArray(arr)) return;

  if (arr.length === 0) return;

  return arr[Math.floor(Math.random() * arr.length)];
};

const validOrders = [1, -1, 'r'];

/**
 * Returns a new array sorted according to the specified order
 * @param  {Array<String|Number>}  arr   Array to sort
 * @param  {String|Number} order Specific order
 * @return {Array<String|Number>}       Sorted array
 */
export const sort = (arr = [], order = 1) => {
  if (!arrayOfNumbers(arr) && !arrayOfStrings(arr)) return;

  if (!validOrders.includes(order)) return;

  if (arr.length === 1) return arr;

  if (arrayOfNumbers(arr)) {
    if (order === 1) return arr.map((el) => el).sort((a, b) => a - b);
    if (order === -1) return arr.map((el) => el).sort((a, b) => b - a);
    if (order === 'r')
      return arr.map((el) => el).sort(() => 0.5 - Math.random());
  }

  if (order === 1) return arr.map((el) => el).sort();
  if (order === -1)
    return arr
      .map((el) => el)
      .sort((a, b) => {
        if (a > b) return -1;
        if (b > a) return 1;
        return 0;
      });
  if (order === 'r') return arr.map((el) => el).sort(() => 0.5 - Math.random());
};
