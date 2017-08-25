/*
 * Write a function that returns the count of the total number of vowels in a string.
 * Example: 'Hello World!' -> 3
 */
const vowelCount = (str) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < vowels.length; j++) {
			if (vowels[j] === str[i].toLowerCase()) {
				counter++;
			}
		}
	}
	return counter;
}

console.log(vowelCount('Hello World!'));