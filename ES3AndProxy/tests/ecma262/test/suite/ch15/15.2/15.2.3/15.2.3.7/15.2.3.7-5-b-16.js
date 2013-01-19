wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var accessed = false;
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'enumerable', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ prop: descObj }));
    for (var property in obj) {
        if (property === 'prop') {
            accessed = true;
        }
    }
    return !accessed;
});
runTestCase(testcase);