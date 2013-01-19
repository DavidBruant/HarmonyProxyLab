var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 12,
            writable: true,
            configurable: false
        }));
        Object.preventExtensions(obj);
        return !Object.isFrozen(obj);
    });
runTestCase(testcase);