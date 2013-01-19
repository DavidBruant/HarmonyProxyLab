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
        enumerable: true,
        configurable: true
    }));
    obj.prop = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return propertyDefineCorrect && desc.set === setFunc && verifySetFunc === 'overrideData';
});
runTestCase(testcase);