wrapTestObject(function testcase() {
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
        Object.defineProperty(obj, 'prop', wrapTestObject({ set: undefined }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return desc1.set === setFunc && desc2.set === setFunc && e instanceof TypeError;
    }
});
runTestCase(testcase);