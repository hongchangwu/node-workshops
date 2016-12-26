var http = require('http')
var map = require('through2-map')

var port = process.argv[2]
http.createServer(function (req, res) {
    if (req.method == 'POST') {
        console.log('POST')
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    } else {
        console.log('GET')
        res.end()
    }
}).listen(port)
