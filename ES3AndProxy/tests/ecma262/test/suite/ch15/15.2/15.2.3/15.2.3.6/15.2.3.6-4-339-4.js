wrapTestObject(function testcase() {
    var obj = wrapTestObject(function () {
            return arguments;
        })();
    Object.defineProperty(obj, '0', wrapTestObject({
        value: 2010,
        writable: true,
        enumerable: true,
        configurable: false
    }));
    var propertyDefineCorrect = obj.hasOwnProperty('0');
    var desc1 = Object.getOwnPropertyDescriptor(obj, '0');
    wrapTestObject(function getFunc() {
        return 20;
    });
    try {
        Object.defineProperty(obj, '0', wrapTestObject({ get: getFunc }));
        return false;
    } catch (e) {
        var desc2 = Object.getOwnPropertyDescriptor(obj, '0');
        return propertyDefineCorrect && desc1.value === 2010 && obj[0] === 2010 && typeof desc2.get === 'undefined' && e instanceof TypeError;
    }
});
runTestCase(testcase);