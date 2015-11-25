var fancify = require(process.argv[2])
var test = require('tape')

test('fancify', function(t) {
  t.equal(fancify('yes'), '~*~yes~*~', 'Wraps a ~*~ around string')
  t.equal(fancify('yes', true), '~*~YES~*~', 'Wraps ~*~ around allcaps string')
  t.equal(fancify('yes', false, '!'), '~!~yes~!~', 'Wraps changed to ~!~')
  t.end()
})
