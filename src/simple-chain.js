const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  storage: [],

  getLength() {
    return this.storage.length;
  },
  addLink(value) {
    
    if (value === undefined) {
      this.storage.push("");
    } else {
      this.storage.push(value);
    }
    
    // this.storage.push(newValue);
    return this;
  },
  removeLink(position) {

    if (typeof position === 'number' && position-1 < this.getLength() && position-1 >= 0) {
      const cPosition = position-1;
      this.storage = this.storage.slice(0, cPosition).concat(this.storage.slice(cPosition + 1));
    } else {
      this.storage = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    
    return this;
  },
  reverseChain() {
    this.storage.reverse();
    return this;
  },
  finishChain() {
    let resultingStr = '';
    this.storage.forEach((element, index) => {
      (index === 0) ? resultingStr += `( ${element} )` : resultingStr += `~~( ${element} )`;
    })
    this.storage = [];
    return resultingStr;
    
  }
};

const result = (chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());

console.log(result)

module.exports = {
  chainMaker
};
