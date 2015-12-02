var mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  firstName: firstName,
  lastName: lastName
}

mongo.connect(url, function (err, db) {
      // db gives access to the database
  if (err) throw err
  const docs = db.collection('docs')
  docs.insert(doc, function (err) {
    if (err) throw err
    console.log(JSON.stringify(doc))
    db.close()
  })
})

// var mongo = require('mongodb').MongoClient
//
// var firstName = process.argv[2]
// var lastName = process.argv[3]
// var doc = {
//   firstName: firstName,
//   lastName: lastName
// }
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
// mongo.connect(url, function (err, db) {
//   if (err) throw err
//   var collection = db.collection('docs')
//   collection.insert(doc, function (err, data) {
//     if (err) throw err
//     console.log(JSON.stringify(doc))
//     db.close()
//   })
// })
