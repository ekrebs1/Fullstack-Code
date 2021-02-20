/* Javascript Functions */

/* ----------------------------------------------------------------------------------------*/

/* What are functions?
1. Code Block that stores information that can be used over again
2. Backbone off JS, if you understand functions at their core, everything else is relatively simple
3. Functions can have return values or side effects 
*/

//Function Syntax //ES5
function makeBread() {
    //this is the function body
    console.log('🍞') // side-effect
    return '🍞' // when I invoke makeBread(), I will return this to whatever is assigned to it on invocation
}

const bread = makeBread() // Function invocation 
//bread is now equal to the return value of makeBread()

//ES6
const makeBread = () => {
    console.log('🍞')
}

/* ----------------------------------------------------------------------------------------*/

/* Function Definitions/Statements/Declarations vs Function Expressions */

    /* The difference between function declarations and function expressions is:
        -Function declarations are hoisted to the top of the JS page* whereas function expressions are not 
        - *we will talk about this in more detail when covering scopes
    */

// This is the Function declaration/definition/statement
makeBeer() // you have access to makeBeer before it is declared as a function declaration 
makeLunch() // you do NOT have access to makeLunch before it is declared as a function expression 
function makeBeer() {
    //This is the function body
    return '🍺'
}

// This is a function expression (ES5)
const makeLunch = function() {
    return '🥪'
}

// ES6 (Arrow Syntax =>)
const makeLunch = () => {
    return '🍺'
}

/* ----------------------------------------------------------------------------------------*/

/* Function Parameters vs. Function Arguments */
    /*
        Parameters are the names listed in the function definition
        Arguments are the values passed into the function invocation 
    */

function makeSushi (qty) { // passd in as parameters
 return '🍣'.repeat(qty) 
}

const sushi = makeSushi(8) // makeSushi is called with 
console.log(sushi)

/* ----------------------------------------------------------------------------------------*/

/* Anonomyous Functions */

    /* Let's think of anonomyous functions within the context of JQuery click listeners */
    $('.my-button').click(function () { // function passed into click listener is an annonymous function 
        console.log('Clicking!')
    })

    $('.my-button').click(() => { // ES6 anonomyous function
        console.log('Clicking!')
    })

/* ----------------------------------------------------------------------------------------*/

/* IIFE (Immediately Invoked Function Expression) */
    /*
        -code will not leak out 
        -IIFEs allow you to immediately invoke your JavaScript without the need to manually invoke it with calling your fn
        -IIFEs also allow you to close anything you declare into the scope of the IIFE, so it won't be accessible outside the scope of the IIFE
    */

    // mySuperSecretAPIKey is not accessible here 
    (function () {
        // mySuperSecretAPIKey is only accessible here 
        const mySuperSecretAPIKey = '12345'
        console.log("I am Immediately going to be invoked!")
    })()

/* ----------------------------------------------------------------------------------------*/

/* Parameter Best Practices */

    /* Best practice for functions is to pass no more than 3 parameters
        - If you want to pass more than 3 params, use an object --> we'll talk about this next week 
    */

    const makeDailyMeal = ( breakfast, snack, lunch, teaTime, dinner) => {
        return breakfast + snack + lunch + teaTime + dinner
    }

    const myMeal = makeDailyMeal('🍳', '🥪', '🥖', undefined, '🧅')
     console.log(myMeal)

/* ----------------------------------------------------------------------------------------*/