import { arrayOfNumbers } from './array.js';

export const sum = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return nums.reduce((prev, current) => prev + current);
};

export const avg = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  return sum(nums) / nums.length;
};

export default { sum, avg };
