var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var fun = wrapTestObject(function () {
                return 'ownSetProperty';
            });
        Object.defineProperty(obj, 'property', wrapTestObject({
            set: fun,
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return desc.set === fun;
    });
runTestCase(testcase);