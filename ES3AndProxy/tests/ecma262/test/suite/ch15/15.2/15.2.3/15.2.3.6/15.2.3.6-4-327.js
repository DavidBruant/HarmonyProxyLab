wrapTestObject(function testcase() {
    var obj = wrapTestObject({});
    Object.defineProperty(obj, 'prop', wrapTestObject({
        value: 2010,
        writable: true,
        enumerable: true,
        configurable: true
    }));
    var propertyDefineCorrect = obj.hasOwnProperty('prop');
    var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
    for (var property in obj) {
        if (property === 'prop') {
            return propertyDefineCorrect && desc.enumerable === true;
        }
    }
    return false;
});
runTestCase(testcase);