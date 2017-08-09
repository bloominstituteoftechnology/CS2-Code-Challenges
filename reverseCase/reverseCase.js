/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 const swapCase = (word) => {
 	const swap = {
 		for (let i=0; i < word.length; i++) {
 			const str = word.charAt(i);
 			swap += (str == str.toUpperCase() ? str.toLowerCase() : str.toUpperCase());
 			// console.log(str);
 		}
 	}
 	return swap;
 };
 const swapper = swapCase('Hello');
 console.log(swapper);