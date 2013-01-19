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
        configurable: true
    }));
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    Object.defineProperty(obj, 'prop', wrapTestObject({ configurable: false }));
    var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
    delete obj.prop;
    return desc1.configurable === true && desc2.configurable === false && obj.hasOwnProperty('prop');
});
runTestCase(testcase);