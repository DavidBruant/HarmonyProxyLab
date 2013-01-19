wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        JSON.enumerable = true;
        Object.defineProperty(obj, 'property', JSON);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete JSON.enumerable;
    }
});
runTestCase(testcase);