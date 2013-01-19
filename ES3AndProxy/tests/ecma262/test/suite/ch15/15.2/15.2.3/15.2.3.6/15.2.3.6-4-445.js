var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                verifySetFunc = value;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: true
        }));
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
        obj.prop = 'overrideData';
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return typeof desc1.set === 'undefined' && propertyDefineCorrect && desc2.set === setFunc && verifySetFunc === 'overrideData';
    });
runTestCase(testcase);