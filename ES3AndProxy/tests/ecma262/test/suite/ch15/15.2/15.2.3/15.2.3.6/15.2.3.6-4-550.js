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
            configurable: true
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        for (var p in obj) {
            if (p === 'prop') {
                return false;
            }
        }
        return propertyDefineCorrect && desc.enumerable === false;
    });
runTestCase(testcase);