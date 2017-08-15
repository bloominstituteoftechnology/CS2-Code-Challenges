/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */

//initial code
const removeDuplicates = (arr) => {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if(!(newArr.includes(arr[i]))) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

//"beast mode"
const removeDuplicates = (arr) => {
	const newArr = [];
	const obj = {};
	for (let i =0; i < arr.length; i++) {
		if (!obj[arr[i]]) {
			obj[arr[i]] = true;
			newArr.push(arr[i]);
		}
	}
	return newArr;
}