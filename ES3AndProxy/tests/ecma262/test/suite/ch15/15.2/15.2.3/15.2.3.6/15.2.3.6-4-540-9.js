wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    obj.verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunc;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunc = value;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: false
    }));
    obj.prop = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return propertyDefineCorrect && desc.set === setFunc && obj.verifySetFunc === 'overrideData';
});
runTestCase(testcase);