/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (str) => {
 	let newStr = '';

 	for (let i = 0; i < str.length; i++) {
 		let char = str[i];
 		if (char === char.toLowerCase()) {
 			newStr = newStr + char.toUpperCase();
 		} else {
 			newStr = newStr + char.toLowerCase();
 		}
 	}
 	return newStr;
 };

 console.log(reverseCase('Hello World'));