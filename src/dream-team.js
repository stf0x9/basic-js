const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  
  let teamName = [];
  
  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    
    if (typeof member === 'string') {
      const firstLetter = (member.trim())[0]
      teamName.push(firstLetter.toUpperCase());
    }
  }
  return teamName.sort((a, b) => a.localeCompare(b)).join('');
}

module.exports = {
  createDreamTeam
};
