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
        set: undefined,
        enumerable: true,
        configurable: false
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    try {
        Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return typeof desc1.set === 'undefined' && typeof desc2.set === 'undefined' && e instanceof TypeError;
    }
});
runTestCase(testcase);