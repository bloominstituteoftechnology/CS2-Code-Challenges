// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.  (change var to let)
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.


// in this expample, there is closue being created becaues i is call in a higher scope. (i=11 when 
//the for loop ends)
for (var i = 1; i <= 10; i++) {
	var sT = (function(i) {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		return function() {
			console.log(i);
		}
	})(i);
	sT(setTimeout,0)
}
//i = 20