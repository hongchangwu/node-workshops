var http = require('http')
var url = require('url')

var port = process.argv[2]
http.createServer(function (req, res) {
    var parts = url.parse(req.url, true)
    console.dir(parts)
    var pathname = parts.pathname
    var query = parts.query
    var date = new Date(query.iso)
    res.writeHead(200, {'Content-Type': 'application/json'})
    var json
    if (pathname == '/api/parsetime') {
        json = {'hour': date.getHours(), 'minute': date.getMinutes(), 'second': date.getSeconds()}
    } else if (pathname == '/api/unixtime') {
        json = {'unixtime': date.getTime()}
    } else {
        json = {'error': "Unknown pathname: " + pathname}
    }
    res.end(JSON.stringify(json), null, 2)
}).listen(port)
