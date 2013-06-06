var test = require("tape")

var allFiles = require("../index")

test("allFiles is a function", function (assert) {
    assert.equal(typeof allFiles, "function")
    assert.end()
})
