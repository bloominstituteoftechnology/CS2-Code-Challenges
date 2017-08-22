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

const evenOccurence = (arr) => {
  // Your code here.
  const occ = {}
  let returnVal;
  for (let i = 0; i < arr.length; i++) {
    if (occ[arr[i]]) occ[arr[i]]++;
    else occ[arr[i]] = 1;
  }
  const occKeys = Object.keys(occ);
  for (let j = 0; j < occKeys.length; j++) {
    if(occ[occKeys[j]] % 2 === 0) {
      returnVal = occKeys[j];
      break;
    }
  }
  return returnVal;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven); //  4



