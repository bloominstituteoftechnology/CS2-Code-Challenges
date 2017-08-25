/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */
 /* 1. Test Cases
  *  'rEVERSE cASE' -> 'Reverse Case'
  *  'all caps' -> 'ALL CAPS'
  *  'LOWER CASE' -> 'lower case'
  *  2. Pseudo
  *     a. Initialize variable to hold characters;
  *     b. For loop terminating at str.length
  *     c. check if letter is lower case. If so, make upper case, else make lower case.
  *     d. add characters back into a full string using initialized variable from beginning
  *     e. return new string.
  */
const reverseCase = (str) => {
    let oppositeString = '';
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];  //It's just easier this way
        if (letter == letter.toLowerCase()) {
            oppositeString = oppositeString + letter.toUpperCase();
        } else {
            oppositeString = oppositeString + letter.toLowerCase();
        }
    }  return oppositeString;
}

console.log(reverseCase('Hello World'))