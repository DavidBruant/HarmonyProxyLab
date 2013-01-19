wrapTestObject(function testcase() {
    var result = Object.getOwnPropertyNames(fnGlobalObject());
    var expResult = wrapTestObject([
            'NaN',
            'Infinity',
            'undefined',
            'eval',
            'parseInt',
            'parseFloat',
            'isNaN',
            'isFinite',
            'decodeURI',
            'decodeURIComponent',
            'encodeURI',
            'encodeURIComponent',
            'Object',
            'Function',
            'Array',
            'String',
            'Boolean',
            'Number',
            'Date',
            'Date',
            'RegExp',
            'Error',
            'EvalError',
            'RangeError',
            'ReferenceError',
            'SyntaxError',
            'TypeError',
            'URIError',
            'Math',
            'JSON'
        ]);
    var result1 = wrapTestObject({});
    for (var p in result) {
        result1[result[p]] = true;
    }
    for (var p1 in expResult) {
        if (!result1[expResult[p1]]) {
            return false;
        }
    }
    return true;
});
runTestCase(testcase);