/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 * 1. 'aabsjd' -> false
 * 2. 'abcdefg' -> true
 *
 * 1. Initiate loop to the end of strings length incrementing by 1
 * 2. Declare variable to hold place of current letter
 * 3. search index of string for character at point past index of current character
 * 4. If character appears in index later, false, else true.
 */

 const isUnique = (str) => {
     for (let i = 0; i < str.length; i++){
         let char = str[i];
         if (str.indexOf(char, i+1) !== -1){
             return false;
         }
     }
     return true;
 }