/* Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures?
 */

// const findUnique = (str) => {
// 	let unique='';

// 	for (let i = 0; i < str.length; i++) {
// 		if(unique.indexOf(str[i]) === -1) {
// 			unique += str[i];
// 		}
// 	}
// 	return unique;
//  };

//  console.log(findUnique('This is a string'));

// ^^^ old code because i misunderstood the assignment, lol


 const isUnique = (str) => {
	 for (let i = 0; i < str.length; i++) {
		 for (let j = i +1; j < str.length; j++) {
			 if (str[i] == str[j]) return false;
		 }
	 }
		 return true;
 };