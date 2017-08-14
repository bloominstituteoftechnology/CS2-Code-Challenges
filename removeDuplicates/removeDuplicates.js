/* 0. Instructions
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */

// 1. Identify Test Cases
const a = [1, 1, 1, 2, 2, 3, 4, 5, 5] // -> [1, 2, 3, 4, 5]
const b = ["spray", "spray", "limit", "elite", "elite", "exuberant", "destruction", "present"]

/* 2. Pseudo-Code
	initialize array with first element
	loop thrugh arr
		compare second element with first element
 */

// 3a. Solution #1 using for loop
const removeDuplicates = (arr) => {
	let seen = {};
	let result = [];
	let j = 0;
	for (let i = 0; i < arr.length; i++) {
		if (seen[arr[i]] !== 1) {
			seen[arr[i]] = 1;
			result[j++] = arr[i];
		}
	}
	return result;
}

console.log(removeDuplicates(a))
console.log(removeDuplicates(b))

// 3b. Solution #1
// const removeDuplicates = (arr) => {
// 	return arr.filter((element, index, array) => { // filter creates new array from elements that return true
// 		return !index || element != array[index - 1];
// 	})
// };

// console.log(removeDuplicates(a))
// console.log(removeDuplicates(b))

// 3c. Solution #3 using new Set();
// const removeDuplicates = (arr) => Array.from(new Set(arr));

// console.log(removeDuplicates(a))
// console.log(removeDuplicates(b))