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

//iterate through the array
//see how many times an element appears more then once
//return element that appears only an even number of times


const evenOccurrence = (arr)=> {
  
   var storage = {};
  
   arr.forEach(function(value, index) {
     storage[value] = storage[value] + 1 || 1;
   });
 
   for (var i = 0; i < arr.length; i++) {
     var current = arr[i];
     if (storage[current] % 2 === 0) {
       return current;
     }
   }
   
   return null;
   
 }
 const onlyEven = evenOccurrence([1, 7, 2, 2,4, 5, 1, 6, 8, 9, 6, 4, 1]);
  console.log(onlyEven); 