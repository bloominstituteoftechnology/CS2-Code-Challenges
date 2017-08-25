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

//const evenOccurence = (arr) => {
  // Your code here.
//};


// Prompt: Find the first item that occurs an even number of times in an array. Remember to handle multiple even-occurrence items and return the first one. Return null if there are no even-occurrence items.

function evenOccurrence (array)=> {
  // Store counts
  var storage = {};

  // Store each value within the storage object to keep count
  array.forEach(function(value, index) {
    storage[value] = storage[value] + 1 || 1;
  });

  // loop through array to find first occurence of an even count
  for (var i = 0; i < array.length; i++) {
    var current = arr[i];

    if (storage[current] % 2 === 0) {
      return current;
    }
  }
  // If no even occurrence found, return null
  return null;
}
