const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(hasDirectOutput = true) {
    this.hasDirectOutput = hasDirectOutput;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz";
  }

  // -------- ENCODE LETTER --------
  encodeLetter(letterToEncode, keyLetter) {
    const isSymbol = this.alphabet.indexOf(letterToEncode.toLowerCase()) === -1;

    if (isSymbol) {
      return letterToEncode;
    }

    const plainIndex = this.alphabet.indexOf(letterToEncode);
    const keyIndex = this.alphabet.indexOf(keyLetter);

    const encIndex = (plainIndex + keyIndex) % 26;

    return this.alphabet[encIndex];
  }

  // -------- ENCRYPT MESSAGE --------
  encrypt(string, key) {

    if (arguments.length !== 2 || (!arguments[0]) || (!arguments[1])) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedString = "";
    for (let i = 0, j = 0; i < string.length; i++) {
      const letter = string[i].toLowerCase();
      const keyLetter = key[j % key.length].toLowerCase();

      encryptedString += this.encodeLetter(letter, keyLetter);

      if (this.alphabet.indexOf(letter) !== -1) {
        j++;
      }
    }
    //check output type
    if (!this.hasDirectOutput) {
      return encryptedString.toUpperCase().split('').reverse().join('');
    }

    return encryptedString.toUpperCase();
  }

  // -------- DECODE LETTER --------
  decodeLetter(letterToDecode, keyLetter) {
    const isSymbol = this.alphabet.indexOf(letterToDecode.toLowerCase()) === -1;

    if (isSymbol) {
      return letterToDecode;
    }

    const cryptIndex = this.alphabet.indexOf(letterToDecode);
    const keyIndex = this.alphabet.indexOf(keyLetter);
    //handle possible negative numbers
    const decIndex = (((cryptIndex - keyIndex) % 26) + 26) % 26;
    return this.alphabet[decIndex];
  }

  // -------- DECRYPT MESSAGE --------
  decrypt(string, key) {

    if (arguments.length !== 2 || (!arguments[0]) || (!arguments[1])) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedString = "";
    for (let i = 0, j = 0; i < string.length; i++) {
      const letter = string[i].toLowerCase();
      const keyLetter = key[j % key.length].toLowerCase();

      decryptedString += this.decodeLetter(letter, keyLetter);

      if (this.alphabet.indexOf(letter) !== -1) {
        j++;
      }
    }
    //check output type
    if (!this.hasDirectOutput) {
      return decryptedString.toUpperCase().split('').reverse().join('');
    }

    return decryptedString.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
