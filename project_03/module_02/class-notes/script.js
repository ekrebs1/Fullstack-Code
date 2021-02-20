/*
Lowest level - Machine Code
Assembly Code - CPU and machines are written in
C, C++ - Written in english, worry about memory allocation
Python, Javascript, Java, Ruby - Higher Level Programming Languages
Javascript - Language of the Web
Interpreting JS is done by the browser
Browser's engine --> Firefox (Spider Monkey) Chrome (V8 engine)
Primitive Data Types
String 'hello', "hello"
Int 1, 2
Boolean, true, false
Variables in Javascript
let, const - initializing variables
constants are not meant to be changed
const animal = 'dog'
lets can be changed
let animal = 'dog'
animal = 'cat'
Functions
A block of code encapsulated by brackets that can be called or invoked later on
Think of it as a set of instructions that you can execute whenever necessary
function sayHello() {
  console.log("hello")
}
sayHello()
Function Parameters
function say(word) {
  console.log(word)
}
Return Values
function animal(type) {
  return 'I am a ' + type
  return `I am a ${type}` ES6
}
console.log(animal('dog'))
let whatAmI = animal('dog')
say("hi!")
say("goodbye!")
Jquery
A function that returns something that you can call
.text(), .css(), .attr(), 500 other jquery methods/functions
$(selector)
*/

// Passing a function into a function
// function print(fn) {
//   return fn('hello')
// }

// console.log(print(function (string) {
//   return string
// }))

// Click Listener added to button
// $('.my-button').click(function () {
  // this -> the element that was clicked on
  // $(this).toggleClass('blue')
// })

//*Functions, Variables, Listeners!!