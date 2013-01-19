wrapTestObject(function testcase() {
    var accessed = false;
    try {
        JSON.enumerable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: JSON }));
        for (var property in newObj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete JSON.enumerable;
    }
});
runTestCase(testcase);