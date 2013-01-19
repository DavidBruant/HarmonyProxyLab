wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    var fun = wrapTestObject(function () {
            return 'ownSetProperty';
        });
    Object.defineProperty(obj, 'property', wrapTestObject({
        set: fun,
        configurable: true
    }));
    var desc = Object.getOwnPropertyDescriptor(obj, 'property');
    var propDefined = 'set' in desc;
    try {
        delete desc.set;
        var propDeleted = 'set' in desc;
        return propDefined && !propDeleted;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);