wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    Object.defineProperties(obj, wrapTestObject({ prop: wrapTestObject({ enumerable: wrapTestObject(new Boolean(true)) }) }));
    for (var property in obj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);