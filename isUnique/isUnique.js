/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
/*
 * i: string
 * o: boolean
 *
 * make new str that contains set of chars
 *
 * for each char in the str
 *   if curr str is found in new str
 *     return false
 *   add curr char to new str * 
 * return true
 */

const isUnique = (str) => {
  let included = '';
  for (let i = 0; i < str.length; i++) {
    if (included.indexOf(str[i]) !== -1) return false;
    included += str[i];
  }
  return true;
};

console.log(isUnique('aa'));
console.log(isUnique('ab'));
