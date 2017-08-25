/*
 * Write a function that takes an array and removes all duplicate items.
 * [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
 * 
 * beast mode: try not to use two for loops. 
 *  hint: most array methods native to JS iterate in some way. 
 *  So if you're using 'indexOf' 'sort' 'forEach' etc, 
 *  you're more than likely using a for loop under the hood.
 */

 /*Test cases
  [1, 1, 1, 2, 2, 3, 4, 5, 5] -> [1, 2, 3, 4, 5]
  [1,2, 3, 4] -> [1, 2, 3, 4]
  [] -> []
  */
  /* remove duplicates function
  create new set from array values
  return set as array;
  */

const removeDuplicates = (arr) => {
	return [...new Set(arr)];
};

// 
/* Second Way
create an object that remember what numbers we have seen
iterate through the array with for each
	if the value does not exist within memo 
		create the value within memo
return the values of memo
*/

const removeDuplicates2 = (arr) => {
  const memo = {};
  arr.forEach((a) => {
    if(!memo[a]) {
      memo[a] = a;
    }
  })
return Object.values(memo);
};

// should be linear time
