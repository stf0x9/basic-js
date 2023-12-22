const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const newArr = [];
  let prev = arr[0];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    const next = arr[i];

    if (skipNext) {
      skipNext = false;
      continue;
    }

    const indexOfNextIsMatchingWithLoopIndex = arr.indexOf(prev) + 1 === i;

    switch (next) {
      default:
        prev = next;
        newArr.push(prev);
        break;
      case '--double-prev':
        if (i > 0 && indexOfNextIsMatchingWithLoopIndex) {
          newArr.push(prev);
        }
        break;
      case '--discard-prev':
        if (indexOfNextIsMatchingWithLoopIndex) {
          newArr.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          newArr.push(arr[i + 1])
        }
        break;
      case '--discard-next':
        skipNext = true;
        break;
    }

  }
  return newArr;
}

module.exports = {
  transform
};
