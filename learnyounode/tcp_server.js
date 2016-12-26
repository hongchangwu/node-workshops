var net = require('net')
var strftime = require('strftime')

var port = process.argv[2]
var server = net.createServer(function (socket) {
    socket.write(strftime.strftime('%Y-%m-%d %H:%M', new Date()))
    socket.end("\n")
}).listen(port)