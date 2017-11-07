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

function evenOccurrence (arr) {
  var storage = {};

  arr.forEach((item) => {
    storage[item] = storage[item] + 1 || 1;
  });

  for (var i = 0; i < arr.length; i++) {
    if (storage[arr[i]] % 2 === 0) {
      return current;
    }
  }
  return null;
}

console.log(evenOccurrence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]));