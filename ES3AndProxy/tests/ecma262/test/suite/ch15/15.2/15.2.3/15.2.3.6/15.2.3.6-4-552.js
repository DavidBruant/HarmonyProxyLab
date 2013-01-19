wrapTestObject(function testcase() {
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
    var result1 = obj.prop === 1001;
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', wrapTestObject({ get: undefined }));
    var result2 = typeof obj.prop === 'undefined';
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    return result1 && result2 && desc1.get === getFunc && typeof desc2.get === 'undefined';
});
runTestCase(testcase);