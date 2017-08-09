/* 0. Instructions
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

/* 1. Identify Test Cases
  * const a = 'Bacon ipsum dolor amet spare ribs drumstick strip steak.'
  * const b = 'HeLLo WoRLd!'
  * const c = 'bvAlhatQBq'
  */

/* 2. Pseudo-Code
 * function reverseCase str
 *   initialize empty String variable
 *   loop over str
 *     store each element of str in variable n
 *     if element n is uppercase, convert to lowercase, otherwise convert to uppercase
 *     store that element into s
 *   return s
 */

// 3a. Solution Using .split(), .map(), .join()
const reverseCase = str =>
	str
		.split('')
		.map(x => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
		.join('');

// 3b. Solution Using for loop
const reverseCase = str => {
	let s = '';
	for (let i = 0; i < str.length; i++) {
		let n = str.charAt(i);
		s += n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase();
	}
	return s;
};
