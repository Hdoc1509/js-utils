import { arrayOfNumbers } from './array.js';

export const sum = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  if (nums.length === 0) return 0;

  return nums.reduce((prev, current) => prev + current);
};

export const avg = (nums = []) => {
  if (!arrayOfNumbers(nums)) return;

  if (nums.length === 0) return 0;

  return sum(nums) / nums.length;
};
