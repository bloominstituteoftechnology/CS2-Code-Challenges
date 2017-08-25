/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

 const isUnique = (str) => {
	let currentChar = str.charAt(0);
	for(let i = 1; i < str.length; i++) {
		let newChar = str.charAt(i);
		if(currentChar === newChar) {
			return false;
		}
	}
	return true;
};
