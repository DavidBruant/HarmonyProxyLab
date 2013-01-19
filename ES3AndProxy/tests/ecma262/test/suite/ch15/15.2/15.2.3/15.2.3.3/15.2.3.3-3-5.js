var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var fun = wrapTestObject(function () {
                return 'ownAccessorProperty';
            });
        Object.defineProperty(obj, 'property', wrapTestObject({
            get: fun,
            configurable: true
        }));
        var desc = Object.getOwnPropertyDescriptor(obj, 'property');
        return desc.get === fun;
    });
runTestCase(testcase);