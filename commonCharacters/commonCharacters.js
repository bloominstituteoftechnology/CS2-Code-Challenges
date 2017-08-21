/*
 * Common Characters:
 * Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings. *
 * Your function should return the common characters in the same order that they appear in the first argument.
 * Do not return duplicate characters and ignore whitespace in your returned string.  *
 * Example: commonCharacters('acexivou', 'aegihobu')  *
 * Returns: 'aeiou'
*/


commonCharacter = (string1, string2) => {
    let holdString = '';
for(let i = 0; i < string2.length; i++){
    if(string1.includes(string2[i]) ){
        holdString += string2[i];
    }
}
return holdString;

}

string1 = 'acexivouwrse';
string2 = 'aegihobuxtrdtlv';

console.log(commonCharacter(string1, string2));