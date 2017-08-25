/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */
const arr = [1, 1, 1, 2, 2, 3, 4, 5, 5];
const removeDuplicates = (arr) => {
	//array
	const nonDuplicates = new Set();
	nonDuplicates.forEach((nonDup, i) => {
		if (nonDup === nonDup) {
			nonDuplicates[i] = nonDup();
		} else {
			nonDuplicates[i] = nonDup();
		}	
	});
	return nonDuplicates;
};

console.log(removeDuplicates(arr));

/*
const removeDuplicates = (arr, cb) => {
  const set = new Set();
  arr.forEach(item => {
    set.add(item);
  });
  cb(Array.from(set));
};

removeDuplicates(foods, (uniqueFoods) => {
  console.log(`foods with duplicates removed: ${uniqueFoods}`);
});
*/
