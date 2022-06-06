const { arrayOfNumbers } = require('./array');

/**
 * Returns the sum of an array of numbers
 * @param  {Array<Number>}  nums Array of numbers to sum
 */
const sum = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return nums.reduce((prev, current) => prev + current);
};

/**
 * Returns the arithmetic average of an array of numbers
 * @param  {Array<Number>}  nums Array of numbers for get average
 */
const avg = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return sum(nums) / nums.length;
};

module.exports = { sum, avg };
