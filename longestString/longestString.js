/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

// 1. identify test cases
// ['abc', 'a', 'b'] -> 'abc'
// ['abc', 'def'] -> 'def'
// [] -> null

/*
function longestString strings
  sort string by length
  return string index 0
*/


const longestString = (strings) => {
  strings.sort((a,b) => b.length - a.length)
  return strings[0];
}