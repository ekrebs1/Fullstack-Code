/* Javascript Functions Part 2 + Scopes */

/* ----------------------------------------------------------------------------------------*/

/* Pure Functions */
/* 
  What are pure functions?
  - Pure functions are functions that strictly use their input to return some output with no
    side effects
*/
const myString = 'Hello my name is '
function notPure() {
  console.log('not pure') // side effect
  return `${myString} Karan` // usage of a global variable
}

function pure(name) {
  // no side effect
  return `Hello my name is ${name}` // only return output based on input
}

pure('Karan')

/* ----------------------------------------------------------------------------------------*/

/* Higher Order Functions */
/* 
  What are HOF?
  - HOF are functions that either take in functions as parameters or return functions themselves
*/
// JQuery's .click() function is a HOF because it takes in a function (callback) as an argument
$('.my-button').click(() => {
  console.log('I am clicked!')
})

function myHOF(firstPart) {
  return (secondPart) => {
    return `${firstPart} ${secondPart}`
  }
}

const myString = myHOF('Hello my name is ')('Karan')

/* ----------------------------------------------------------------------------------------*/

/* Closures */
/* 
  What is a closure?
  - A function within another function
  - Closures allow you to prevent parameter passing from function to function
  - Note: You shouldn't create closures for functions that need to be accessed in multiple scopes 
*/
function getMeal() {
  const breakfast = '🍳'
  const snack = '🥪'
  const lunch = '🥖'
  const teaTime = '🍜'
  const dinner = '🧅'
  
  // These variables above are now closured within the context of makeDailyMeal()
  function makeDailyMeal() {
    return breakfast + snack + lunch + teaTime + dinner  
  }
  // do some stuff with myMeal here
}

const makeDailyMeal = (breakfast, snack, lunch, teaTime, dinner) => {
  return breakfast + snack + lunch + teaTime + dinner
}

/* ----------------------------------------------------------------------------------------*/

/* Lexical Environments */
/* 
  Each BLOCK {} of code will create it's own lexical environment
  When trying to access variables or functions declared within their scope, you can only access 
  your scope or higher, but not lower
*/

let a = 1 // scope => global scope

function myFn() { // scope => global scope
  // I have access to a, b, mySecondFn() here
  let b = 2 // scope => myFn

  function mySecondFn() { // scope => myFn
    // I have access to a, b, c, myFn, mySecondFn
    console.log(d) // will fail, because d is scoped to the if statement
    let c = 3 // scope => mySecondFn

    if (c) {
      // I have access to a, b, c, d, myFn, mySecondFn here
      let d = 4 // scope => if statement
    }
  }
}

// Below is a more applicable example of scope

function changeText(newText) {
  newText = 'goodbye'
  console.log(newText)
}

const myButtonClick = () => {
  let myButtonText = $('.my-button').text()
  myButtonText.text = newText // will fail because newText is declared on the if statement scope

  if (myButtonText === 'Hello') {
    let newText = 'goodbye'
    myButtonText.css({
      backgroundColor: 'blue'
    })
  } else {
    let newBackgroundColor = 'red'
    myButtonText.css({
      backgroundColor: newBackgroundColor
    })
  }
  changeText(newText)
}
$('.my-button').click(myButtonClick)

// we are trying to change the span's text value to be
// the global variables value that we have declared
$('.red-value').
red = $('.red-value').val('.text')
   blue = $('.red-value').val('text')
   green = $('.red-value').val('text')