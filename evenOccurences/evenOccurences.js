/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurance([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */


const evenOccurence = (arr) => {
  let storage = {};

  arr.forEach(function(value, index) {
    storage[value] = storage[value] + 1 || 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }

  return null;
};

const nums = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(evenOccurence(nums));