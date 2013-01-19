wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    var verifySetFunc = 'data';
    var getFunc = wrapTestObject(function () {
            return verifySetFunc;
        });
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: getFunc,
        enumerable: true,
        configurable: true
    }));
    obj.prop = 'overrideData';
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    return propertyDefineCorrect && typeof desc.set === 'undefined' && obj.prop === 'data';
});
runTestCase(testcase);