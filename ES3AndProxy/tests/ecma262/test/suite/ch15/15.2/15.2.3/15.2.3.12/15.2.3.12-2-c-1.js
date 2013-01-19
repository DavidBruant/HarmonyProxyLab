wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'foo', wrapTestObject({
        value: 20,
        writable: false,
        configurable: true
    }));
    Object.preventExtensions(obj);
    return !Object.isFrozen(obj);
});
runTestCase(testcase);