// smallOne
function smallOne(lower, higher) {
    if (lower > higher) {
        return higher
    }
    return lower
} 

// rotateRight
function rotateRight(arr) {
   // let end = arr.pop()
   // arr.unshift(end)
    arr.unshift(arr.pop())   
}

// rotateLeft
function rotateLeft(arr) {
    arr.push(arr.shift())
}

/* push - always PUSH the element that you push it onto something */
