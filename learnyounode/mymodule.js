var fs = require('fs')

String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
}

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err)
        callback(null, list.filter(function (name) { return name.endsWith('.' + ext) }))
    })
}

