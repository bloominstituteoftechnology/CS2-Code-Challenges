// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i < 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10. 
		i--
		console.log(i);
	}, 0);
} 

//while removing the equal sign to help print out the 11, I 
//decided to decrement the function instead of incrementing it
// that way the for loop would print out 1-10 instead of the
//10's and 11's. 

