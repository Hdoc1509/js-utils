import { sum, avg } from './arith.js';

export const formInputs = ($form) => {
  const inputs = Object.fromEntries(new FormData($form));

  inputs.prototype.sum = function () {
    return sum(Object.values(this).map((n = Number(n))));
  };

  inputs.prototype.avg = function () {
    return avg(Object.values(this).map((n = Number(n))));
  };

  return inputs;
};
