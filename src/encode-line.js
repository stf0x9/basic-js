const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return "";
  }

  let encoded = "";
  let currentLetter = str[0];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    const nextLetter = str[i];

    if (currentLetter === nextLetter) {
      count++;
    } else {
      count === 1
        ? (encoded += currentLetter)
        : (encoded += count + currentLetter);
      currentLetter = nextLetter;
      count = 1;
    }
  }

  if (count === 1) {
    encoded += currentLetter;
  } else {
    encoded += count + currentLetter;
  }

  return encoded;
}

module.exports = {
  encodeLine
};
