/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
// 

const isUnique = (string) => {
	return new Set(string).size === string.length;
}



console.log(isUnique('abcdefghijklmnaa'));
console.log(isUnique('abcdefghijklmnop'));
