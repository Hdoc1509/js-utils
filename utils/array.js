export const arrayOfNumbers = (arr = []) => {
  if (!Array.isArray(arr)) return false;

  const notNumbers = arr.filter((el) => typeof el !== 'number');

  if (notNumbers.length > 0) return false;

  return true;
};

export const randomElement = (arr) => {
  if (!Array.isArray(arr)) return;

  if (arr.length === 0) return;

  return arr[Math.floor(Math.random() * arr.length)];
};

export const sort = (arr = [], order = 1) => {
  if (!Array.isArray(arr)) return;

  if (arr.length < 2) return arr;

  if (order === 1) return arr.map((el) => el).sort((a, b) => a - b);
  if (order === -1) return arr.map((el) => el).sort((a, b) => b - a);
  if (order === 'r') return arr.map((el) => el).sort(() => Math.random());
};
