// 1. Instructions
// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// 2a. let instead of var (ES6 fix)
// for (let i = 1; i <= 10; i++) {
// 	setTimeout(() => console.log(i), 0);
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
// }

// 2b. setting setTimeout scope
function x(i) {
	setTimeout(() => console.log(i), 0)
}
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
for (var i = 1; i <= 10; i++) {
	x(i);
}