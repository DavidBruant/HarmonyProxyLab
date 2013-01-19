wrapTestObject(function testcase() {
    var obj = wrapTestObject([]);
    var verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return verifySetFunc;
        });
    Object.defineProperty(obj, '0', wrapTestObject({
        get: getFunc,
        enumerable: true,
        configurable: true
    }));
    obj[0] = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('0');
    var desc = Object.getOwnPropertyDescriptor(obj, '0');
    return propertyDefineCorrect && typeof desc.set === 'undefined' && obj[0] === 'data';
});
runTestCase(testcase);