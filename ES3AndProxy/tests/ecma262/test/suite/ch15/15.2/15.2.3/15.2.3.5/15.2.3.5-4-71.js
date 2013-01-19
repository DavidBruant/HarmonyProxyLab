wrapTestObject(function testcase() {
    var accessed = false;
    try {
        fnGlobalObject().enumerable = true;
        var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: fnGlobalObject() }));
        for (var property in newObj) {
            if (property === 'prop') {
                accessed = true;
            }
        }
        return accessed;
    } finally {
        delete fnGlobalObject().enumerable;
    }
});
runTestCase(testcase);