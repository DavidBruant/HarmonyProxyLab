var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            writable: true,
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return 'value' in desc;
    });
runTestCase(testcase);