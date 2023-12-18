const { NotImplementedError } = require('../extensions/index.js');

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
  const digitsArr = (n.toString().split('').map(Number));
  const sumOfDigits = digitsArr.reduce((acc, digit) => (acc + digit));
  if (sumOfDigits.toString().length >= 2) {
    return getSumOfDigits(sumOfDigits);
  } else {
    return sumOfDigits;
  }
}

module.exports = {
  getSumOfDigits
};
