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
  let arrStorage = {};

  arr.forEach = (value) => {
    arrStorage[value] = storage[value] + 1 || 1;
  };
  
  for (let i = 0; i < arr.length; i++) {
    let even = arr[i];

    if (arrStorage[even] % 2 === 0) {
      return even;
    }
  }
  return null;
};

const randomArray = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
