// 1. Instructions
// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// 2a. Solution: ES6 fix. let instead of var encloses the scope of i to the for loop
// for (let i = 1; i <= 10; i++) {
// 	setTimeout(() => console.log(i), 0);
// }

// 2b. Solution: Passing a new copy of i with each iteration to setTimeout function callback
// function x(i) {
// 	setTimeout(() => console.log(i), 0)
// }
// for (var i = 1; i <= 10; i++) {
// 	x(i);
// }

// 2c. Solution: New scope for each iteration using IIFE, setTimeout function callback 
// 		 provided a variable j that evaluates to i within the scope of for loop
// for (var i = 1; i <= 10; i++) {
// 	(() => {
// 		var j = i;
// 		setTimeout(() => console.log(j), 0);
// 	})();
// }

// 2d. Solution: New scope for each iteration using IIFE (passing i as an argument)
for (var i = 1; i <= 10; i++) {
	((i) => setTimeout(() => console.log(i), 0))(i);
}