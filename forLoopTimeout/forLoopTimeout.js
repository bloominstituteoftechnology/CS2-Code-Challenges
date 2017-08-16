// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

// for (var i = 1; i <= 10; i++) {
// 	setTimeout(function() {
// 		// From looking at the code you would assume it would print 1 - 10
// 		// It doesn't.  Why?  How can you make it print 1 - 10.
// 		console.log(i);
// 	}, 0);
// }

for (var i = 1; i <= 10; i++) {
	setTimeout(function(x) { 
		return function() { 
			console.log(x); 
		}; }(i), 0);
}

// We're only passing the refernece to the variable i
// and not the the actual value of i when it goes through each loop
// So by the time the setTimeout function actually runs, the for statement
// has already run and produced the number 11
// Needed to pass the actual value of i at each iteration, so
// another anon function was needed as a wrapper
// Outer function executes first, and takes in a private variable x, which we pass i into
