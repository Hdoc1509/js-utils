export const arrayOfNumbers = (arr = []) => {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) return false;

  const notNumbers = arr.filter((el) => typeof el !== 'number');

  if (notNumbers.length > 0) return false;

  return true;
};

export const arrayOfStrings = (arr = []) => {
  if (!Array.isArray(arr)) return false;

  if (arr.length === 0) return false;

  const notStrings = arr.filter((el) => typeof el !== 'string');

  if (notStrings.length > 0) return false;

  return true;
};

export const randomElement = (arr) => {
  if (!Array.isArray(arr)) return;

  if (arr.length === 0) return;

  return arr[Math.floor(Math.random() * arr.length)];
};

const validOrders = [1, -1, 'r'];

export const sort = (arr = [], order = 1) => {
  if (!arrayOfNumbers(arr) && !arrayOfStrings(arr)) return;

  if (!validOrders.includes(order)) return;

  if (arr.length === 1) return arr;

  if (arrayOfNumbers(arr)) {
    if (order === 1) return arr.map((el) => el).sort((a, b) => a - b);
    if (order === -1) return arr.map((el) => el).sort((a, b) => b - a);
    if (order === 'r') return arr.map((el) => el).sort(() => Math.random());
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
  if (order === 'r') return arr.map((el) => el).sort();
};
