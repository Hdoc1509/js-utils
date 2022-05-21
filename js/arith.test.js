import { sum, avg } from './arith.js';

test('Add two numbers correctly', () => {
  const numbers = [1, 2];

  expect(sum(numbers)).toBe(3);
});
