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
  const uniqueSet = Array.from(new Set(arr));
  let counter = 0;
  for (let i = 0; i < uniqueSet.length; i++) {
  	counter = 0;
  	for (let j = 0; j < arr.length; j++) {
  		if (uniqueSet[i] === arr[j]) {
  			counter++;
  		}
  	}
  	if (counter % 2 === 0) {
        console.log(counter);
  		return arr[i];
  	}
  }
  return null;
};

const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
console.log(onlyEven); 