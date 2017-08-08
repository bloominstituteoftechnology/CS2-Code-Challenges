/*
 * Write a function that accepts an array of strings.
 * Return the longest string in the array.
 */

 /* 1. Identify test cases
 ['abc', 'a', 'b'] -> 'abc'
 ['def', 'hijk', 'l', 'm', 'nop'] -> 'hijk'
 [] -> null
accepts array,
loop over items
	keeps tabs of length of looped items, changes variable if current item is longer.
	reaches the end and returns the variable.
 */
const longestString = (array) => {
 	let string = array[0];

 	for (let i = 0; i < array.length; i++) {
 		if (array[i].length > string.length) {
 			string = array[i]
 		}
 	}
	return string;
}

const arr1 = ['abc', 'a', 'b'];
const arr2 = ['def', 'hijk', 'l', 'm', 'nop']
const arr3 = []

longestString(arr1);
longestString(arr2);
longestString(arr3);