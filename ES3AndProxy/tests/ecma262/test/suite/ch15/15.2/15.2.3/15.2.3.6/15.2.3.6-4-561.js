var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var getFunc = wrapTestObject(function () {
                return 1001;
            });
        var verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                verifySetFunc = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: false,
            configurable: false
        }));
        var result1 = obj.prop === 1001;
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ get: undefined }));
            return false;
        } catch (e) {
            var result2 = obj.prop === 1001;
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            return result1 && result2 && desc1.get === getFunc && desc2.get === getFunc && e instanceof TypeError;
        }
    });
runTestCase(testcase);