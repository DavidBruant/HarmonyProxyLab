wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var numObj = wrapTestObject(new Number(-2));
    numObj.enumerable = true;
    Object.defineProperty(obj, 'property', numObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);