/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */
let numbers = [2,3,5,4,3,2,65,5,2];
const removeDuplicates = (arr) => {
	//code here...
	let removeDupes = Array.from(new Set(numbers));
	return removeDupes;
};

console.log(removeDuplicates(numbers));