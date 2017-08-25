// Explain what is wrong with this code and how you would fix this.
// With ES6 there is a very, very simple way to solve this.
// See if you can solve this with just ES5 JS.
// The output should be 1, 2, 3, .... 10. Right now it just prints 11.
// I've been asked this three times in separate interviews.

<<<<<<< HEAD

for (var i = 0; i <=10; i++) {
=======
for (var i = 1; i <= 10; i++) {
>>>>>>> d1daab308de663dad2c7129e60c72bbb70519b4c
	setTimeout(function() {
		// From looking at the code you would assume it would print 1 - 10
		// It doesn't.  Why?  How can you make it print 1 - 10.
		console.log(i);
	}, 0);
<<<<<<< HEAD
} // You have to include the loop witin a funtion to create a scope
for (var i = 0; i < =10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 0);
    })(i);
=======
>>>>>>> d1daab308de663dad2c7129e60c72bbb70519b4c
}