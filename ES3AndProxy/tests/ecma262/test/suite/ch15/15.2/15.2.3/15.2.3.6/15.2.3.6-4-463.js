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
            configurable: true
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ set: undefined }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc1.set === setFunc && typeof desc2.set === 'undefined';
    });
runTestCase(testcase);