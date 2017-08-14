/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */

const removeDuplicates = (arr) => {
	// 1
	// const newArr = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (!newArr.includes(arr[i])) {
	// 		newArr.push(arr[i]);
	// 	}
	// }
	// return newArr;

	// 2
	//assuming the arr is sorted 
	// let tempNum;
	// const newArr = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] !== tempNum) {
	// 		newArr.push(arr[i]);
	// 	}
	// 	tempNum = arr[i];
	// }
	// return newArr;

	// 3
	const elSearch = {};
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(elSearch[arr[i]] === undefined) {
			newArr.push(arr[i]);
			elSearch[arr[i]] = true; 
		}
	}
	return newArr;
};

console.log(removeDuplicates([1,2,3,5,4,6,6,7,9,8]))
console.log(removeDuplicates([4,5,4,2,2,4,5,9,8,7,9,-1,3,2,-1,-2]))