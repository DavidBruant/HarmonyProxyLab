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
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return propertyDefineCorrect && typeof desc.get === 'undefined';
});
runTestCase(testcase);