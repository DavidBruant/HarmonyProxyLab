var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 1001;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: true
        }));
        var result1 = typeof obj.prop === 'undefined';
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        var result2 = obj.prop === 1001;
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return result1 && result2 && typeof desc1.get === 'undefined' && desc2.get === getFunc;
    });
runTestCase(testcase);