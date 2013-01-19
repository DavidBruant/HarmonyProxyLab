wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    obj.verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return obj.verifySetFunc;
        });
    var setFunc = wrapTestObject(function (value) {
            obj.verifySetFunc = value;
        });
    Object.defineProperty(obj, '0', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: false
    }));
    obj[0] = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('0');
    var desc = Object.getOwnPropertyDescriptor(obj, '0');
    return propertyDefineCorrect && desc.set === setFunc && obj.verifySetFunc === 'overrideData';
});
runTestCase(testcase);