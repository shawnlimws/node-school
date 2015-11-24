var result = 0

for (var i = 2; i < process.argv.length; i = i + 1) {
  result = result + Number(process.argv[i])
}

console.log(result)
