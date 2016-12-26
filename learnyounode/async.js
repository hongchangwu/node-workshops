var http = require('http')
var bl = require('bl')
var _ = require('underscore')

var urls = process.argv.slice(2)
var results = {}

_.each(urls, function (url) {
    http.get(url, function (res) {
        res.pipe(bl(function (err, data) {
            if (err) console.error(err)
            else {
                results[url] = data.toString()
                if (_.size(results) === urls.length) {
                    _.each(urls, function (url) {
                        console.log(results[url])
                    })
                           
                }
            }
        }))
    })
})
