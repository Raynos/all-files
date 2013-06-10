var fs = require("fs")
var path = require("path")

var isJavascript = /\.js$/

module.exports = allFiles

function allFiles(uri, regex) {
    var stat = fs.statSync(uri)
    regex = regex || isJavascript

    if (stat.isFile()) {
        if (!regex.test(uri)) {
            return []
        }

        return [uri]
    }

    var files = fs.readdirSync(uri)
    return files.filter(function (uri) {
        return regex.test(uri)
    }).reduce(function (acc, fileName) {
        return acc.concat(allFiles(path.join(uri, fileName)))
    }, [])
}
