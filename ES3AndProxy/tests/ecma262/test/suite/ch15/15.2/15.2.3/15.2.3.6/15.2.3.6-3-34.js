wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var arrObj = wrapTestObject([]);
    arrObj.enumerable = true;
    Object.defineProperty(obj, 'property', arrObj);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);