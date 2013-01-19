wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        Math.enumerable = true;
        Object.defineProperty(obj, 'property', Math);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete Math.enumerable;
    }
});
runTestCase(testcase);