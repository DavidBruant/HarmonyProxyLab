wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var fun = wrapTestObject(function () {
            return 'ownGetProperty';
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: fun,
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    try {
        desc.get = 'overwriteGetProperty';
        return desc.get === 'overwriteGetProperty';
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);