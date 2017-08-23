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
  const occNums = {};
  arr.forEach((x) => {
    if (occNums[x]) occNums[x] += 1;
    else occNums[x] = 1;
  });
  const occNumKeys = Object.keys(occNums);
  let firstEvenOcc; 
  occNumKeys.forEach((x) => {
    if (occNums[x] % 2 === 0) {
      if (!firstEvenOcc) firstEvenOcc = x;
      return;
    }
  });
  if (firstEvenOcc) return firstEvenOcc;
  return null;
};
const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven);

