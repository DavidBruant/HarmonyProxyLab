"use strict";

var esprima = require('esprima');
var escodegen = require('escodegen');


// wrap all object, array and function declarations in a function called wrapTestObject

module.exports = function transform(sourceCode){
    var ast = esprima.parse(sourceCode);

};