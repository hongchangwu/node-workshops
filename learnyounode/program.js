var fs = require('fs')
var file = process.argv[2]

if (typeof file !== 'undefined' && file !== null) {
    fs.readFile(file, 'utf8', function (err, data) {
        if (err) throw err;
        var lines = data.toString().split("\n").length - 1
        console.log(lines)
    })
}
