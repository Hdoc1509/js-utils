import { arrayOfNumbers } from './array.js';

/**
 * Returns the sum of an array of numbers
 * @param  {Array<Number>}  nums Array of numbers to sum
 */
export const sum = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return nums.reduce((prev, current) => prev + current);
};

/**
 * Returns the arithmetic average of an array of numbers
 * @param  {Array<Number>}  nums Array of numbers for get average
 */
export const avg = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return sum(nums) / nums.length;
};
