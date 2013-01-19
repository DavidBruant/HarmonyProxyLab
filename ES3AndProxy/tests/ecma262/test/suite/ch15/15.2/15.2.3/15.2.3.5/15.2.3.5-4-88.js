wrapTestObject(function testcase() {
    var accessed = false;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: wrapTestObject({ enumerable: wrapTestObject(new Number(-9)) }) }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);