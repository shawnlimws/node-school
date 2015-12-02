var mongo = require('mongodb').MongoClient
var age = parseInt(process.argv[2], 10)
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db) {
      // db gives access to the database
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.count({
    age: { $gt: age }
  }, function (err, count) {
    if (err) throw error
    console.log(count)
    db.close()
  })
})
