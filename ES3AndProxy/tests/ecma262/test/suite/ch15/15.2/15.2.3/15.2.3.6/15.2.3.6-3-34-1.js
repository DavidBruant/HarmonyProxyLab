wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        Array.prototype.enumerable = true;
        var arrObj = wrapTestObject([]);
        Object.defineProperty(obj, 'property', arrObj);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete Array.prototype.enumerable;
    }
});
runTestCase(testcase);