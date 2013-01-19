wrapTestObject(function testcase() {
    var accessed = false;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: 12 }) }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);