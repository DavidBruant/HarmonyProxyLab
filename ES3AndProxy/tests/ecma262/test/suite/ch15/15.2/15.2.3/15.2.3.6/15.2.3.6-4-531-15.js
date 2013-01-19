var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject([]);
        var verifySetFunc = 'data';
        var setFunc = wrapTestObject(function (value) {
                verifySetFunc = value;
            });
        var getFunc = wrapTestObject(function () {
                return verifySetFunc;
            });
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: getFunc,
            set: setFunc,
            enumerable: true,
            configurable: true
        }));
        obj.prop = 'overrideData';
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && desc.set === setFunc && obj.prop === 'overrideData';
    });
runTestCase(testcase);