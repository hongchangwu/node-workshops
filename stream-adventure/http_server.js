var http = require('http')
var through = require('through')

var port = process.argv[2]
var tr = through(function (buffer) {
    this.queue(buffer.toString().toUpperCase())
})

http.createServer(function (req, res) {
    if (req.method == 'POST') {
        req.pipe(tr).pipe(res)
    } else {
        res.end()
    }
}).listen(port)
