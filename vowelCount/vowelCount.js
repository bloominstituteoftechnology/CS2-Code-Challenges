/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
const vowelCount = (string) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < string.length; i++){
        for(let j = 0; j < vowels.length; j++){
            if(string[i] === vowels[j]){
                count++;
            }
        }
    }
  return count;
}

console.log(vowelCount('Hello World!'));