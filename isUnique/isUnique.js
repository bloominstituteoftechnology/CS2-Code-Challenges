/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
 const isUnique = (str) => {
 	const uniqueStr = new Set();
 	for (let i = 0; i < str.length; i++) {
 		if (uniqueStr.has(str[i])) {
 			return false;
 		}
 		uniqueStr.add(str[i]);
 	}
 	return true;
 }