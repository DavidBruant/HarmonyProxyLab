wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var attr = wrapTestObject({});
    Object.defineProperty(attr, 'enumerable', wrapTestObject({
        get: wrapTestObject(function () {
            return true;
        })
    }));
    Object.defineProperty(obj, 'property', attr);
    for (var prop in obj) {
        if (prop === 'property') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);