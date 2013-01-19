wrapTestObject(function testcase() {
    var accessed = false;
    var descObj = wrapTestObject(new Number(-9));
    descObj.enumerable = true;
    var newObj = Object.create(wrapTestObject({}), wrapTestObject({ prop: descObj }));
    for (var property in newObj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);