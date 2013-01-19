wrapTestObject(function testcase() {
    var accessed = false;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: wrapTestObject(new RegExp()) }) }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);