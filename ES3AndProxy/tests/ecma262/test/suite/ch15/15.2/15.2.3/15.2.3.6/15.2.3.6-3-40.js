wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var regObj = wrapTestObject(new RegExp());
    regObj.enumerable = true;
    Object.defineProperty(obj, 'property', regObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);