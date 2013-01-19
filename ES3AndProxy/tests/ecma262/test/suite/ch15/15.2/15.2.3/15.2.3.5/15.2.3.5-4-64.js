wrapTestObject(function testcase() {
    var accessed = false;
    try {
        Math.enumerable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: Math }));
        for (var property in newObj) {
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