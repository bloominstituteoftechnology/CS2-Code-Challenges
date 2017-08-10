/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
const str = 'abcd';
const str1 = 'Abcdabcd';
 const isUnique = (str) => {
   for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1 ) > -1) {
      return false;
    }
  }
  return true;
    

 };
console.log(isUnique(str));
console.log(isUnique(str1));