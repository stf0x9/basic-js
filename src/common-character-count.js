const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let longStr = '';
  let shortStr = '';
  let count = 0;
  
  if (s1.length >= s2.length) {
    longStr = s1;
    shortStr = s2;
  } else {
    longStr = s2;
    shortStr = s1;
  }
  
  for (let i = 0; i < longStr.length; i++) {
    const letter = longStr[i];
    const indexOfLetterInShort = shortStr.indexOf(letter);
    if (indexOfLetterInShort !== -1) {
      count++;
      shortStr = shortStr
        .slice(0, indexOfLetterInShort)
        .concat(shortStr
                .slice(indexOfLetterInShort + 1))
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
