/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */
 

 //This function uniqueCh will accept a string and return true or false depending on if it has repeating Characters
 //This assumes spaces and other non-letters as characters
 //Case sensitive 
const uniqueCh = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str.slice(i+1, str.length).toUpperCase().includes(str[i].toUpperCase())) {
            return false;
        }
    }
    return true
}; 

console.log(uniqueCh("abcdefghii"))
console.log(uniqueCh("abcdefghij"))
console.log(uniqueCh("Halp meh"))