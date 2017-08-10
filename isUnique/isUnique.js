/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// Test Cases
/**
 * 'AAABBBCCC' => false
 * 'ABCDEFGHI' => true
 * 'AaBbCcDdEe' => true
 * 'ABCabcABCabc' => false
 * '' => true
 */

// Psuedo Code
/**
* split the string into an array
*   filter the array 
*     return only if the current character's in the string array 
*     matches the current iteration's index
*   compare the length of the filtered array to the length of the string
*     if the lengths match return true, else false
*/

//Solution
const isUnique = (string) => string
  .split('')
  .filter((val, index, self) => self.indexOf(val) === index)
  .length === string.length;

//Tests
const test1 = 'AAABBBCCC' // => false
const test2 = 'ABCDEFGHI' // => true
const test3 = 'AaBbCcDdEe' // => false
const test4 = 'ABCabcABCabc' // => false
const test5 = '' // => true

console.log(isUnique(test1))
console.log(isUnique(test2))
console.log(isUnique(test3))
console.log(isUnique(test4))
console.log(isUnique(test5))
