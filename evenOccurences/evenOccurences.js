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
  // Your code here.
  const obj = {};

  for (let i = 0; i < arr.length; i++) {
    const count = arr[i];
    if (obj[count]) {
      obj[count]++;
    }
    if (!obj[num]) {
      obj[num] = 1;
    }
  }
  for (let value in obj) {
    if (obj[value] % 2 === 0) {
      return value;
    }
  }
  return 'nothing found';
};
