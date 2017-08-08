/* 0. Instructions
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

/* 1. Identify Test Cases
    const a = ['abc', 'a', 'b'] // -> 'abc'
    const b = ['abc', 'def'] // -> 'def'
    const c = [] // -> null
    const d = ['asdfasfas', 'sdfadfsa', 'asfasfasdfasfasfd', 's'] // -> 'asfasfasdfasfasfd'
*/

/* 2. Pseudo-Code
function longestString strings
  loop over the array of strings
    do something in the loop
  return longestString
*/

/* 3a. Solution #1
const longestStr = (arr) => {
  let x = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > x.length) x = arr[i];
  }
  return x;
};
*/

// 3b. Solution #2
const longestStr = (arr) => {
  let x = '';
  arr.forEach(i => {
    if (i.length > x.length) x = i;
  });
  return x;
}