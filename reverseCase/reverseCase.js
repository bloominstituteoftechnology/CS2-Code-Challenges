/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
<<<<<<< HEAD
 */

 /*Identify test cases
  *"Hello World"
  *"HeLo WoRlD"
  */

/*
 *Create reverse string function
 *loop string elements
 * check whether is lower or is uppercase
 * switch to the opposite of what it is
*/
let testString = 'I foRgOT tO ADd lEnGtH tO mY fOr LoOp';

 let reverseString = (testString) => {
    let holdString = ' ';
    for (let i = 0; i < testString.length; i++) {
      if (testString[i] == testString[i].toUpperCase()) {
        holdString += testString[i].toLowerCase();
      } else if(testString[i] == testString[i].toLowerCase()) {
        holdString += testString[i].toUpperCase();
      }
    
    }
    return holdString;
 };

 console.log(reverseString(testString));
=======
 */
>>>>>>> d2b7d99bf919a312c807bb54398ddb9e5e7cce17
