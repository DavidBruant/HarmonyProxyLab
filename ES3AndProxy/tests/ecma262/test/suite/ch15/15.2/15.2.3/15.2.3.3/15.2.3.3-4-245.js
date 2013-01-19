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
        var accessed = false;
        for (var prop in desc) {
            if (prop === 'set') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);