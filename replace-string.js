let myString = 'Hello World!!!';

console.log(myString)

// TODO: replace the first occurence of 'o' with '0' in `myString` defined above.
// NOTE: DO NOT HARD CODE THE SIZE OF `myString`. When you change the value
// of `myString`, the test should still pass.
let newString = myString.replace("o" , "0");

console.log(newString)

// DO NOT CHANGE ANYTHING BELOW THIS LINE.

module.exports = {
  myString,
  newString
};
