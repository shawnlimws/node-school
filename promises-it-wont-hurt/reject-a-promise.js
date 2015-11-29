var q = require('q')
var defer = q.defer()

function print (reject) {
  console.log('error.message')
}

defer.promise.then(function (reject) {
  setTimeout(defer.reject, 300, print(reject))
})
