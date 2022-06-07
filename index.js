const { sum, avg } = require('./utils/arith');
const {
  arrayOfNumbers,
  arrayOfStrings,
  sort,
  randomElement,
} = require('./utils/array');
const { gid, qs, qsa } = require('./utils/dom');
const { formInputs } = require('./utils/form');

exports.equation = require('./utils/equation');
module.exports = {
  sum,
  avg,
  arrayOfNumbers,
  arrayOfStrings,
  sort,
  randomElement,
  gid,
  qs,
  qsa,
  formInputs,
};
