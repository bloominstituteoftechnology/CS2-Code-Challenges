/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
 */

const reverseCase = (string) => {
    return string.split(' ').map((word) => {
        return word[0].toLowerCase() + word.slice(1).toUpperCase();
    }).join(' ');
}
console.log(reverseCase('Hello World'));
console.log(reverseCase('Lambda School Rocks!')); 