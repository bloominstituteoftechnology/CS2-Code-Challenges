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
  let count = 0;
  let element = 0;
  for(let i = 0; i < arr.length; i++){
    let tempInt = arr[i];
    let tempCount = 0;
    for(let j = 0; j < arr.length; j++){
      if(arr[j] === tempInt){
        tempCount++;
       }
    }
    if(tempCount % 2 === 0 && tempCount > count){
        count = tempCount;
        element = tempInt;
        }
  }
 return element; 
};
