wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        Object.prototype.enumerable = true;
        Object.defineProperty(obj, 'property', JSON);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete Object.prototype.enumerable;
    }
});
runTestCase(testcase);