wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var descObj = wrapTestObject({});
    Object.defineProperty(descObj, 'get', wrapTestObject({
        set: wrapTestObject(function () {
        })
    }));
    Object.defineProperties(obj, wrapTestObject({ property: descObj }));
    return typeof obj.property === 'undefined';
});
runTestCase(testcase);