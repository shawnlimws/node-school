var q = require('q')
var defer = q.defer()

defer.promise.then(console.log)
setTimeout(defer.reject, 300, 'Error')
