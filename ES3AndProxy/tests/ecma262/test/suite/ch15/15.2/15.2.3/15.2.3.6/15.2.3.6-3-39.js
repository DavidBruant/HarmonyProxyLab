wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var dateObj = wrapTestObject(new Date());
    dateObj.enumerable = true;
    Object.defineProperty(obj, 'property', dateObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);