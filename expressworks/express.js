var express = require('express')
var app = express()

app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])

// For static pages
app.use(express.static(process.argv[3] || 'public'))

// Using template stuff
app.set('views', process.argv[3])
app.set('view engine', 'jade')
