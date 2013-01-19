var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: wrapTestObject(function () {
            }),
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return 'set' in desc;
    });
runTestCase(testcase);