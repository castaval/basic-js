const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(backyard) {
  let countCats = 0;

  const findingCatsRecursion = (massive) => {
    massive.forEach((item, index, array) => {
      if (item === "^^") {
        countCats += 1;
      }

      if (Array.isArray(item)) {
        findingCatsRecursion(item);
      }
    });
  };

  findingCatsRecursion(backyard);

  return countCats;
}

module.exports = {
  countCats,
};
