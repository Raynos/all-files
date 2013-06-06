var fs = require("fs")

var isJavascript = /\.js$/

module.exports = allFiles

function allFiles(uri, regex) {
    var stat = fs.statSync(uri)
    regex = regex || isJavascript

    if (stat.isFile()) {
        if (!regex.test(uri)) {
            return []
        }

        return [fs.readFileSync(uri)]
    }

    var files = fs.readdirSync(uri)
    return files.filter(function (uri) {
        return regex.test(uri)
    }).reduce(function (acc, uri) {
        return acc.concat(allFiles(uri))
    }, [])
}
