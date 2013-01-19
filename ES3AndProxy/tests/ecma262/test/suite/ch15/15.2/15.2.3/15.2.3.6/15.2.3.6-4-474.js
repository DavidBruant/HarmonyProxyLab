var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                verifySetFunc = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: setFunc,
            enumerable: true,
            configurable: false
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ configurable: true }));
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            delete obj.prop;
            return desc1.configurable === false && desc2.configurable === false && obj.hasOwnProperty('prop') && e instanceof TypeError;
        }
    });
runTestCase(testcase);