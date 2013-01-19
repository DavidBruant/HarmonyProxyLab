var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                verifySetFunc = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: setFunc,
            enumerable: false,
            configurable: false
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ value: 1001 }));
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            return desc1.hasOwnProperty('get') && !desc2.hasOwnProperty('value') && e instanceof TypeError;
        }
    });
runTestCase(testcase);