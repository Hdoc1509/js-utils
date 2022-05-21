export const sum = (nums = []) => {
  if (nums.length === 0) return 0;

  return nums.reduce((prev, current) => prev + current);
};

export const avg = (nums = []) => {
  if (nums.length === 0) return 0;

  return sum(nums) / nums.length;
};
