"use strict";
// wrap all object, array and function declarations in a function called wrapTestObject
var esprima = require('esprima');
var escodegen = require('escodegen');

function str(x){
    return JSON.stringify(x, null, '   ');
}

var functionCallExpression = "wrapTestObject()";
var functionVarDeclaration = "var XXXXX = YYYYY()";
/**
 *
 * @param ast
 * @return ExpressionStatement which .expression is a CallExpression
 */
function wrapNode(ast){
    var replacement;
    var wrapTestObjectCallExpression = esprima.parse(functionCallExpression).body[0];

    if(ast.type === 'FunctionDeclaration'){ // turn it into an equivalent FunctionExpression
        var functionVarDeclarationReplacement = esprima.parse(functionVarDeclaration).body[0];
        functionVarDeclarationReplacement.declarations[0].id.name = ast.id.name; // name of the variable is the name of the declared function

        // turn the function declaration into an equivalent function expression and wrap it
        ast.type = 'FunctionExpression';
        wrapTestObjectCallExpression.expression.arguments.push(ast);

        // use the wrapped result as value for the var declaration
        functionVarDeclarationReplacement.declarations[0].init = wrapTestObjectCallExpression.expression;
        replacement = functionVarDeclarationReplacement;
    }
    else{
        wrapTestObjectCallExpression.expression.arguments.push(ast);
        replacement = wrapTestObjectCallExpression;
    }

    return replacement;
}

function isObject(x){
    return Object(x) === x;
}

function replaceExpression(x, i, arr){
    if(x !== null && x.type === 'ExpressionStatement')
        arr[i] = x.expression;
}

// TODO switch on node.type
function traverse(node){
    var replacement;

    if(isObject(node) && ('type' in node || Array.isArray(node))){
        //if(node.type) console.log('node', node.type, node);
    }
    else{
        return;
    }

    for(var p in node){
        if(typeof node[p] === 'object'){
            replacement = traverse(node[p]);
        }

        if(isObject(replacement)){
            // these don't want an ExpressionStatement, but the expression in it
            if(['VariableDeclarator', 'Property', 'AssignmentExpression', 'ReturnStatement', 'CallExpression', 'ThrowStatement'].indexOf(node.type) !== -1)
                replacement = replacement.expression;

            node[p] = replacement;
        }
        else{
            if(node.type === "CallExpression" || node.type === "NewExpression"){ // traverse all arguments to remove the .expression if necessary
                node.arguments.forEach(replaceExpression);
            }
            if(node.type === 'ArrayExpression'){
                node.elements.forEach(replaceExpression);
            }

        }
    }

    switch(node.type){ // nodes to wrap
        case 'ObjectExpression':
        case 'FunctionDeclaration':
        case 'FunctionExpression':
        case 'ArrayExpression':
        case 'NewExpression':
            return wrapNode(node);
            break;
        default:
            break;
    }
}

function printsrc(s){
    console.log('=====\n', s, '\n=====\n');
}

/**
 * return an equivalent source code where all object literals are wrapped in a wrapTestObject function call
 * @param sourceCode (string)
 * @return string
 */
function transform(sourceCode){
    // My transformations aren't compatible with esprima+escodegen comments (something about ranges)
    var ast = esprima.parse(sourceCode/*, {range: true, tokens: true, comment: true}*/);

    traverse(ast);
    //console.log('output ast', str(ast));

    //ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
    return escodegen.generate(ast/*, {comment: true}*/)
}

module.exports = transform;