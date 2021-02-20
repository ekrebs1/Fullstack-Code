// Boolean: True vs. False
// If statements take a condition that is truthy or falsey
// If the condition in the If/Else If statements are truthy, you will fall into the if block
// Otherwise you will fall into the Else block

const myDiv = $('.my-div')
console.log(myDiv.length)

if (myDiv.length === 1) {
  console.log("I am in the if block")
  // do whatever this stuff is
} else if (myDiv.length > 1) {
  console.log("I am in the else if block")
} else {
  console.log("I am in the else block")
  // land in this block 
}
