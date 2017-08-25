/*
 * Write a function that reverses the case of each letter in the strings that it receives.
 * Example: 'Hello World' -> 'hELLO wORLD'
 * Assume that each string will contain only spaces and letters.
*/

const changeCases = (string) => {
	let newString = '';
	for (let i = 0; i < string.length; i++) {
		if (string[i] === ' ') {
			newString += string[i];
		} else {
			if(string[i] === string[i].toUpperCase()){
				newString += string[i].toLowerCase();
			} else if( string[i] === string[i].toLowerCase()) {
				newString += string[i].toUpperCase();	
			} 
		}
	}
	return newString;
}

changeCases('Testing This String');
changeCases('yOu ThInk yOu Soo SMUUrt!');
changeCases(' hail hydra');