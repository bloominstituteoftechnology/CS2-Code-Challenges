// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

for (var i = 1; i <= 10; i++) {
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
}

////////////////////\\\\\\\\\\\\\\\\\\
for (var i = 1; i <= 10; i++) {
	setDelay(i);
}

function setDelay(i) {
		setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10. // **Written answer below***
		console.log(i);
	},0);
}

//The code fix was the result of some googling.
// Looking this over again and again didn't make much sense as to why this was not working as intended
//After reading the explanation- it all became apparent.
//The explanation is as follows:
/* We have to arrange a distinct copy of 'i' to be present for each of the timeout functions.
If we don't do something like this, then each of the timer handler functions will share the same variable i.
*/ 

/* My take away from the above is this: We need to make a call back function in order to separate the 'i' values 
so the 'i' values don't overwrite each other and make a grand sum to print 10 times. When making a call back function,
we allow the 'i' value to be separated by the loop which in turn allows the loop to properly iterate through the numbers. */

//To be completely honest alot of this stuff is really foggy at the moment and I have a fingertip grasp on much of these concepts
//so my explanation can be completely off- trying my hardest, feel like a dumby, but pushing through in the hopes that this all makes
//sense soon. 