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
const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
const evenOccurence = (array) => {  
  
  // first: let's count occurences of all the elements in the array
  let hash = {};                    // object to serve as counter for all the items in the array (the items
                                    // will be the keys, the counts will be the values)
  array.forEach(function(e) {       // for each item e in the array
    if(hash[e]) hash[e]++;          // if we already encountered this item, then increments the counter
    else hash[e] = 1;               // otherwise start a new counter (initialized with 1)
  });
  };

  // second: we select only the numbers that occured an odd number of times
  let result = [];               // the result array
  for(var e in hash) {           // for each key e in the hash (the key are the items of the array)
    if(hash[e] % 2 === 0)        // if the count of that item is an even number
      result.push(+e);           // then push the item into the result array (since they are keys are strings we have to cast them into numbers using unary +)
  }
  return result;
}
console.log(onlyEven);
