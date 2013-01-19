var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: wrapTestObject(function () {
            }),
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return 'get' in desc;
    });
runTestCase(testcase);