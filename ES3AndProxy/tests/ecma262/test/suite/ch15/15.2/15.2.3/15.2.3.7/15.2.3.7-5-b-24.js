wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    try {
        Math.enumerable = true;
        Object.defineProperties(obj, wrapTestObject({ prop: Math }));
        for (var property in obj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete Math.enumerable;
    }
});
runTestCase(testcase);