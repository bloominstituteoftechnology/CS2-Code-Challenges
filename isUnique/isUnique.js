/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

const isUnique = (str) => {
    const strSet = new Set();
    for (let i = 0; i < str.length; i++) {
      if (strSet.has(str[i])) return false;
      strSet.add(str[i]);
    }
    return true;
  };
  
  console.log(isUnique('abcdhijklmnopqrstuv')); // true
  console.log(isUnique('abcdefga')); // false
