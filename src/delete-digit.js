const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = Array.from(n.toString());

  let i = 0;

  while (array[i] == array[i + 1]) {
    i++;
  }

  if (array[i] < array[i + 1]) {
    array.splice(i, 1);
  } else {
    array.splice(i + 1, 1);
  }

  let number = Number(array.join(""));
  return number;
}

module.exports = {
  deleteDigit,
};
