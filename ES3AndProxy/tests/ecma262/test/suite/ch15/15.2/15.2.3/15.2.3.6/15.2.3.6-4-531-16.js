wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    var verifySetFunc = 'data';
    var setFunc = wrapTestObject(function (value) {
            verifySetFunc = value;
        });
    var getFunc = wrapTestObject(function () {
            return verifySetFunc;
        });
    Object.defineProperty(obj, '0', wrapTestObject({
        get: getFunc,
        set: setFunc,
        enumerable: true,
        configurable: true
    }));
    obj[0] = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('0');
    var desc = Object.getOwnPropertyDescriptor(obj, '0');
    return propertyDefineCorrect && desc.set === setFunc && obj[0] === 'overrideData';
});
runTestCase(testcase);