var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 1001;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: false
        }));
        var result1 = typeof obj.prop === 'undefined';
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
            return false;
        } catch (e) {
            var result2 = typeof obj.prop === 'undefined';
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            return result1 && result2 && typeof desc1.get === 'undefined' && typeof desc2.get === 'undefined' && e instanceof TypeError;
        }
    });
runTestCase(testcase);