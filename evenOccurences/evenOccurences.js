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
  let holder = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] in holder) {
      holder.arr[i]++;
    } else {
      holder.arr[i] = 1;
    }
  }
  for (var j = 0; j < holder.length; j++) {
    if (holder.j % 2 === 0) {
      return j;
    }
  }
  return null;
};

const otherArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 6, 2, 8, 3, 6, 4];
console.log(evenOccurence(otherArr));