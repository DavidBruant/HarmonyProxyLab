wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var fun = wrapTestObject(function () {
            return 'ownDataProperty';
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        get: fun,
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var accessed = false;
    for (var prop in desc) {
        if (prop === 'get') {
            accessed = true;
        }
    }
    return accessed;
});
runTestCase(testcase);