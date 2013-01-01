"use strict";
// wrap all object, array and function declarations in a function called wrapTestObject
var esprima = require('esprima');
var escodegen = require('escodegen');

var functionCallExpression = "wrapTestObject()";

function wrapNode(ast){
    var wrapTestObjectCallExpression = esprima.parse(functionCallExpression).body[0].expression;
    wrapTestObjectCallExpression.arguments.push(ast);
    return wrapTestObjectCallExpression;
}

function isObject(x){
    return Object(x) === x;
}

function traverse(node){
    var replacement;

    if(isObject(node) && ('type' in node || Array.isArray(node))){
        //if(node.type) console.log('node', node.type, node);
    }
    else{
        return;
    }

    for(var p in node){
        if(typeof node[p] === 'object')
            replacement = traverse(node[p]);

        if(isObject(replacement))
            node[p] = replacement;
    }

    switch(node.type){
        case 'ObjectExpression':
            return wrapNode(node);
            break;
        default:
            break;
    }
}

function printsrc(s){
    console.log('\n=====\n', s, '\n=====\n');
}

module.exports = function transform(sourceCode){
    var ast = esprima.parse(sourceCode);

    var objDecl = ast;
    console.log('objDecl', objDecl.body[0].declarations[1].init);

    printsrc(escodegen.generate(ast));
    traverse(ast);
    printsrc(escodegen.generate(ast));

};