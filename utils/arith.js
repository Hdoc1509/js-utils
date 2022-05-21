export const sum = (nums = []) => {
  if (!Array.isArray(nums)) return;

  const notNumbers = nums.filter((el) => typeof el !== 'number');

  if (notNumbers.length > 0) return;

  if (nums.length === 0) return 0;

  return nums.reduce((prev, current) => prev + current);
};

export const avg = (nums = []) => {
  if (nums.length === 0) return 0;

  return sum(nums) / nums.length;
};
