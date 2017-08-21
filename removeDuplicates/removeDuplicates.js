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
  const temp = [];
  for (let i = 0;i < arr.length; i++) {
    if (!(temp.includes(arr[i]))) {
      temp.push(arr[i]);
    }
  }
  return temp;
};


const a = [1, 1, 1, 2, 2, 3, 4, 5, 5];
const b = [5,5,5,5,5,5,5,5,5,4,4,4,4,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1];
console.log(removeDuplicates(a));
console.log(removeDuplicates(b));
