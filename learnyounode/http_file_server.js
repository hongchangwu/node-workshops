var http = require('http')
var fs = require('fs')

var port = process.argv[2]
var file = process.argv[3]
http.createServer(function (req, res) {
    var stream = fs.createReadStream(file)
    stream.pipe(res)
    stream.on('error', function (err) {
        console.log(err)
        res.end(err.toString())
    })
}).listen(port)
