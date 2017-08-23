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

 /*
 create function
    intialize empty object
    loop through the array
      if the object contains the key then add one to the keys value
      if the object doesn't contain the key then create it with a value of 1
    loop through the objects keys
      if the key has a value thats even return that value
*/

// Test Cases
//[1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1] => 4
//[1, 2, 3, 4] => null

const evenOccurence = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]] += 1;
    if (!obj[arr[i]]) obj[arr[i]] = 1;
  }
  for (let key in obj) {
    if (obj[key] % 2 === 0) return Number(key);
  }
  return null;
};

