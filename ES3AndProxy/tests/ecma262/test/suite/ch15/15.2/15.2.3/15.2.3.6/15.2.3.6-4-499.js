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
        configurable: true
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', wrapTestObject({ set: setFunc }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    obj.prop = 'overrideData';
    return typeof desc1.set === 'undefined' && desc2.set === setFunc && verifySetFunc === 'overrideData';
});
runTestCase(testcase);