wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({
        get: undefined,
        set: undefined,
        enumerable: false,
        configurable: true
    }));
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    for (var p in obj) {
        if (p === 'prop') {
            return false;
        }
    }
    return propertyDefineCorrect && desc.enumerable === false;
});
runTestCase(testcase);