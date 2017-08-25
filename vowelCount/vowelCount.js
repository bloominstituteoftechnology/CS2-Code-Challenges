/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */


 function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U'];
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str.charAt(i))) {
            counter++;
        }
    }
    return counter;
 }

console.log(vowelCount('Hello World!'));