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