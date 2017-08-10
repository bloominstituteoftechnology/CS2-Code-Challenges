/* 0. Instructions 
 * Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// 1. Identify Test Cases
// const a = 'Bacon ipsum dolor amet spare ribs drumstick strip steak.'    // false
// const b = 'HeLLo WORLd!'    // false
// const c = 'bvAlh!(@^$%#)atQBq'  // true

/* 2. Pseudo-Code
 * function with string param
 *  initialize empty string
 *  store unique characters in empty string
 *      compare new string with original string
 * return true if has unique characters, otherwise return false
 */

// 3a. Solution using for loop / indexOf()
const isUnique = str => {
	let x = '';

	for (let i = 0; i < str.length; i++) {
		if (x.indexOf(str[i]) === -1) {
			x += str[i];
		}
	}
	console.log(x === str); // return true if string contains unique characters
};

// 3b. Solution using an Array.from() / new Set() / .join()
const isUnique = str => {
	const x = Array.from(new Set(str)).join('');
	console.log(x === str); // return true if string contains unique characters
};

// 3c. Solution using spread operator / new Set() / .join()
const isUnique = str => {
	const u = x => [...new Set(x)].join('');
	console.log(u(str) === str); // return true if string contains unique characters
};
