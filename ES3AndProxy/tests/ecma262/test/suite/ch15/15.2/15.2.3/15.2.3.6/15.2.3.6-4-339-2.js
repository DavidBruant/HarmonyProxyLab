wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 2010,
        writable: true,
        enumerable: true,
        configurable: false
    }));
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
    wrapTestObject(function getFunc() {
        return 20;
    });
    try {
        Object.defineProperty(obj, 'prop', wrapTestObject({ get: getFunc }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && desc1.value === 2010 && obj.prop === 2010 && typeof desc2.get === 'undefined' && e instanceof TypeError;
    }
});
runTestCase(testcase);