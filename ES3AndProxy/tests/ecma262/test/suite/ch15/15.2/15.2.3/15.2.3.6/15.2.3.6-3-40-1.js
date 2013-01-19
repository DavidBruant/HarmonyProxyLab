wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        RegExp.prototype.enumerable = true;
        var regObj = wrapTestObject(new RegExp());
        Object.defineProperty(obj, 'property', regObj);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete RegExp.prototype.enumerable;
    }
});
runTestCase(testcase);