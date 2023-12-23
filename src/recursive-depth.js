const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }

    const depthsArr = arr.map(item => {
      return this.calculateDepth(item);
    })
    const maxDepth = depthsArr.length > 0 ? Math.max(...depthsArr) : 0;
    return 1 + maxDepth;
  }
}

module.exports = {
  DepthCalculator
};
