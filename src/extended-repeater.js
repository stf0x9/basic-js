const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addition = repeatString(options.addition, options.additionRepeatTimes, options.additionSeparator || '|');
  const stringWithAdditions = str + addition;
  const repeatedStringWithAdditions = repeatString(stringWithAdditions, options.repeatTimes, options.separator || '+');
  
  function repeatString(string = '', count = 1, separator) {
    let output = '';
    for (let i = 0; i < count; i++) {
      if (i < count - 1) {
        output += string + separator;
      } else {
        output += string;
      }
    }
    return output;
   }
  return repeatedStringWithAdditions;
}

module.exports = {
  repeater
};
