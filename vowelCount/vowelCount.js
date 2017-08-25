/* Instructions
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */

// Test Case
const a = 'Hello World!'; // 3
const b = ''; // 0
const c = 'Disrupt jean shorts viral hella meh, plaid cupidatat magna art pArty.' // 20

// Solution using match() and RegEx
const vowelCount = str => (str.match(/[aeiou]/gi) || []).length;

// Solution using Array.from(), filter() and includes()
// const vowelCount = str => Array.from(str).filter(i => 'aeiouAEIOU'.includes(i)).length;

// Sean's Solution using Set
// const vowelCount = str => {
//   const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.has(str[i])) count++;
//   }
//   return count;
// }

console.log(vowelCount(a));
console.log(vowelCount(b));
console.log(vowelCount(c));