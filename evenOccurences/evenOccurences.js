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
  const occurances = {}
  let returnVal = null
  for (let i = 0; i < arr.length; i++) {
    if (occurances['0'+arr[i]]) occurances['0'+arr[i]]++;
    else occurances['0'+arr[i]] = 1;
  }
  const occuranceKeys = Object.keys(occurances);
  for (let j = 0; j < occuranceKeys.length; j++) {
    if(occurances[occuranceKeys[j]] % 2 === 0) {
      returnVal = occuranceKeys[j].splice(0,1);
      break;
    }
  }
  Reflect
  return returnVal;
};

const onlyEven = evenOccurence([1, 7, 4, 2, 5, 1, 6, 8, 9, 6, 4, 3, 2, 1]);
console.log(onlyEven); //  4

console.log(evenOccurence([1,2,3,4,5]))