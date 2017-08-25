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
* create a new Set with the string char values (which automatically dedupes string chars)
*   return set size compared to string length
*/

//Solution
const isUnique = (string) => new Set(string).size === string.length

//Tests
const test1 = 'AAABBBCCC' // => false
const test2 = 'ABCDEFGHI' // => true
const test3 = 'AaBbCcDdEe' // => true
const test4 = 'ABCabcABCabc' // => false
const test5 = '' // => true

console.log(isUnique(test1))
console.log(isUnique(test2))
console.log(isUnique(test3))
console.log(isUnique(test4))
console.log(isUnique(test5))
