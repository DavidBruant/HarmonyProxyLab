var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: false,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        delete obj.prop;
        return propertyDefineCorrect && desc.configurable === false && obj.hasOwnProperty('prop');
    });
runTestCase(testcase);