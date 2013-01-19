var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            get: wrapTestObject(function () {
                return 9;
            }),
            configurable: true
        }));
        Object.preventExtensions(obj);
        return !Object.isFrozen(obj);
    });
runTestCase(testcase);