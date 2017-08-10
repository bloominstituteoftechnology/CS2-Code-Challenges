/* 0. Instructions 
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

/* 1. Identify Test Cases
  * const a = 'Bacon ipsum dolor amet spare ribs drumstick strip steak.'
  * const b = 'HeLLo WORLd!'
  * const c = 'bvAlhatQBq'
  */

/* 2. Pseudo-Code
 * function with string param
 *  initialize empty string
 *  store unique characters in empty string
 *      compare new string with original string
 * return true if has unique characters, otherwise return false
 */

// 3. Solution using an Array
const uniqueChars = str => {
	let x = Array.from(new Set(str));
	console.log(x !== str);
};
