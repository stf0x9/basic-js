const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      if (matrix[x][y] === true) { addOneAroundCell(x, y) }
    }
  }

  function addOneAroundCell(x, y) {

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        //check for validity of row, then exclude mine, then check for validity of cell.
        if (matrix[x + i] !== undefined && matrix[x + i][y - j] !== true && matrix[x + i][y - j] !== undefined) {
          //no cell value => value = 1 | cell has some value => value++
          (matrix[x + i][y - j] === false) ? matrix[x + i][y - j] = 1 : matrix[x + i][y - j]++;
        }

      }
    }
  }

  return matrix.map(row => row.map(elem => elem === true
    ? elem = 1
    : elem === false
      ? elem = 0
      : elem));
}

module.exports = {
  minesweeper
};
