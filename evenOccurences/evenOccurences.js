/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */
//1. Set an empty object variable
//2. loop through array and create pairs of numbers and instances of that number
//3. loop through object and if a number occurred an even number of times, return it.
// Test Cases
//[1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5] => 2
//[1, 3, 4, 1, 3, 4, 1, 3, 4] => "no even occurrences"
//[1, 2, 3, 4, 3, 2, 2, 4] => 3

const evenOccurrence = (arr) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (obj[num]) obj[num]++;
    if (!obj[num]) obj[num] = 1;
  }
  for (let val in obj) {
    if (obj[val] % 2 === 0){
      return val;
    }
  }
  return "No even occurences of a number."
};
