wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        set: wrapTestObject(function () {
        }),
        configurable: true
    }));
    Object.preventExtensions(obj);
    return !Object.isFrozen(obj);
});
runTestCase(testcase);