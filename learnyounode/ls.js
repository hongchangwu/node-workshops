var mymodule = require('./mymodule')
var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function (err, res) {
    if (err) throw err
    console.log(res.join("\n"))
})
