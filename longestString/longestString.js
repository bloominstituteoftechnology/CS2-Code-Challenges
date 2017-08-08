/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

// Test Cases
/**
 * ['Loooong', 'short', 'abcde'] => 'Loooong'
 * ['AAAAAA','BBBB', 'CCCCC', 'DDDDDD'] => 'AAAAAA'
 * [] => ''
 */

// Psuedo Code
/**
* function longestString ([strings])
*   variable longestStringSoFar equals blank
*   iterate over array of strings
*     if current string is longer than longestStringSoFar
*       set longestStringSoFar as current string
*   return longestStringSoFar
*/

// Solution

const longestString = (strings) => {
  let longestStringSoFar = '';
  strings.forEach(string => {
    if (string.length > longestStringSoFar.length) {
      longestStringSoFar = string;
    }
  });
  return longestStringSoFar;
}

// Tests
const test1 = ['Loooong', 'short', 'abcde'];
const test2 = ['AAAAAA','BBBB', 'CCCCC', 'DDDDDD']
const test3 = []

console.log(longestString(test1) === 'Loooong')
console.log(longestString(test2) === 'AAAAAA')
console.log(longestString(test3) === '')
