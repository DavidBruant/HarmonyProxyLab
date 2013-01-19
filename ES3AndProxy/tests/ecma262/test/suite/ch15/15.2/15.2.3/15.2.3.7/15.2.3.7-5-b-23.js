wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject(new Number(-9));
    var accessed = false;
    descObj.enumerable = true;
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    for (var property in obj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);