/* 
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

// 1. identify test cases
// ['abc', 'a', 'b'] -> 'abc'
// ['abc', 'def'] -> 'def'
// [] -> null

/*
function longestString strings
  loop over the array of strings
    do something in the loop
  return longestString
*/

function findLongestWord(array) {
	let longestWord = '';

	array.forEach(word => {
		if(word.length > longestString.length) {
			longestWord = word;
		}
	});

	return longestWord;
}

const word = findLongestWord(['Another', 'one', 'bites', 'the', 'dust']);
console.log(word);