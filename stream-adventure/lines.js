var through = require('through')
var split = require('split')

var i = 1
var tr = through(function (line) {
    if (i % 2 == 0) {
        this.queue(line.toString().toUpperCase() + "\n")
    } else {
        this.queue(line.toString().toLowerCase() + "\n")
    }
    i += 1
})

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
