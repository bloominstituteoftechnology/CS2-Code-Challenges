/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

/*  function(arrayOfStrings) {
		save string length of first index to variable
		if variable length is less than length of next index, continue
		else, next index length is the new value of the variable
		return string whose length is equal to the variable
}

*/

/*
	longestStringFunc(['bears', 'beets', 'battlestar'])-> 'battlestar'
	longestStringFunc(['one', 'two', 'three', 'four', 'five']); -> 'three'
	longestStringFunc(['hey']); -> 'hey'
	longestStringFunc([]); -> null
*/


const longestStringFunc = (strings) => {
	let longestString = '';
	if (strings.length === 0) {
		return null;
	} else if (strings.length === 1) {
		return strings[0];
	} else {
		for (let i = 0; i < strings.length; i++) {
			if (strings[i].length > longestString.length) {
				longestString = strings[i];				
			}
		}
	}
	return longestString
}



console.log(longestStringFunc(['bears', 'beets', 'battlestar']));
console.log(longestStringFunc(['one', 'two', 'three', 'four', 'five']));
console.log(longestStringFunc(['hey']));
console.log(longestStringFunc([]));