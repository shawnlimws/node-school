var mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function (err, db) {
  if (err) throw error
  var collection = db.collection('prices')
  var desiredSize = process.argv[2]
  collection.aggregate([
    { $match: { size: desiredSize}},
    { $group: {
      _id: 'total',
      total: {
        $avg: '$price'
      }
    }}
  ]).toArray(function (err, results) {
    if (err) throw error
    var roundedResults = Number(results[0].total).toFixed(2)
    console.log(roundedResults)
    db.close()
  })
})

// var mongo = require('mongodb').MongoClient
// var size = process.argv[2]
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var prices = db.collection('prices')
//   prices.aggregate([
//     { $match: {
//       size: size
//     }}
//   , { $group: {
//       _id: 'total'
//     , total: {
//         $avg: '$price'
//       }
//     }}
//   ]).toArray(function(err, results) {
//     if (err) throw err
//     if (!results.length) {
//       throw new Error('No results found')
//     }
//     var o = results[0]
//     console.log(Number(o.total).toFixed(2))
//     db.close()
//   })
// })
