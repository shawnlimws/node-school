var entireString = process.argv
var numbers = entireString.slice(2)

var min = Math.min(...numbers)

// console.log(numbers)
console.log(`The minimum of [${numbers}] is ${min}`)
