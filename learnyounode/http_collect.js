var http = require('http')
var bl = require('bl')

var url = process.argv[2]

http.get(url, function (res) {
    res.pipe(bl(function (err, data) {
        if (err) console.error(err)
        else {
            console.log(data.length)
            console.log(data.toString())
        }
    }))
})

