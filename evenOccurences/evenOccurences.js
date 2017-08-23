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
    if (arr.length == 0) return null; 
    const thisArr = arr[0];
    const modeMap = [];  
    maxcount = 0; 
    for (let i = 0; i < arr.length; i++) {
      const arr2 = arr[i]; 
      if (modeMap[arr2] === null) 
        modeMap[arr2] = 1; 
        else 
          modeMap++; 
        if (modeMap[arr2] > maxcount) {
          thisArr = arr2; 
          maxcount = modeMap[arr2];
        }
      return thisArr;
    }
};
