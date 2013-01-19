wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 20,
        writable: true,
        configurable: false
    }));
    Object.preventExtensions(obj);
    return !Object.isFrozen(obj);
});
runTestCase(testcase);