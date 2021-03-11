var a = require("a");
var p = require("./p");
require.ensure(["c"], function(require) {
    var d = require("d")
});
require.ensure([], function(require) {
    const b = require('b')
    const q = require('./q')
});