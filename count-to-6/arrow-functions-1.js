var inputs = process.argv.slice(2)
var oneLetter = inputs.map(words => words.slice(0, 1))
var join = oneLetter.reduce((a, b) => a.concat(b))

console.log(`[${inputs}] becomes "${join}"`)
