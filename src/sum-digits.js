const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let answer;
  n = n
    .toString()
    .split("")
    .map(Number)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  if (n > 9) {
    answer = getSumOfDigits(n);
  } else {
    return n;
  }

  return answer;
}

module.exports = {
  getSumOfDigits,
};
