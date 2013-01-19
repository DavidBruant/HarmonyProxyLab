wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.enumerable = true;
    Object.defineProperty(obj, 'property', argObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);