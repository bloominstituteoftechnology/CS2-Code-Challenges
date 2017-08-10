/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

const findUnique = (str) => {
	let unique='';

	for (let i = 0; i < str.length; i++) {
		if(unique.indexOf(str[i]) === -1) {
			unique += str[i];
		}
	}
	return unique;
 };

 console.log(findUnique('This is a string'));