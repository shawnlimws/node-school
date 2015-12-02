var mongo = require('mongodb').MongoClient
var age = parseInt(process.argv[2], 10)
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db) {
      // db gives access to the database
  if (err) throw err
  var parrots = db.collection('parrots')
  parrots.find({
    age: {
      $gt: age
    }
  }).toArray(function (err, documents) {
    if (err) throw err
    console.log(documents)
    db.close()
  })
})

// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
//
// mongo.connect(url, function (err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.find({
//     age: {
//       $gt: +age
//     }
//   }).toArray(function (err, docs) {
//     if (err) throw err
//     console.log(docs)
//     db.close()
//   })
// })
