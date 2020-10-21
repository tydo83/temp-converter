const convertToC = require('./f2c.js');
const convertToF = require('./c2f.js');
// leave two space after exporting. It's a custom.


// front-end file
// it is in charge of user interaction ONLY

// here's how the data goes through our app:

// 1. user types 'node main.js' and some arguments
// 2. when they hit enter, node puts their inputs
//    into process.argv
// 3. we're going to send that input to our back-end function
// 4. the back-end function will return an answer
// 5. we'll print out that answer to the user

// grab the temperature from the user
const temp = process.argv[2];
// grab the unit from the user
const unit = process.argv[3];

// If the unit is "c" (for celsius), go get the answer from convertToC
// if(unit === 'c') {
//     const celsius = convertToC(temp);
//     console.log(celsius);
// }
// // otherwise, go get the answer from covertToF
// // then print it
// else {
//     const fahrenheit = convertToF(temp); 
//     console.log(fahrenheit);
// }
// This is pure front-end file 

// using ternary 
console.log(unit === 'c' ? convertToC(temp) : convertToF(temp));
