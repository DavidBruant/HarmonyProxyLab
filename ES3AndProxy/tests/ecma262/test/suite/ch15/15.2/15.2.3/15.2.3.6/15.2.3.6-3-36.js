wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var boolObj = wrapTestObject(new Boolean(true));
    boolObj.enumerable = true;
    Object.defineProperty(obj, 'property', boolObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);