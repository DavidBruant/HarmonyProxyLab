"use strict";

var esprima = require('esprima');
var escodegen = require('escodegen');

function str(x){
    return JSON.stringify(x, null, '   ');
}

var sourceCode = '/*azerty*/ var a = {}';

var ast = esprima.parse(sourceCode, {range: true, tokens: true, comment: true});

console.log(str(ast));

ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
console.log("output", escodegen.generate(ast, {comment: true}))