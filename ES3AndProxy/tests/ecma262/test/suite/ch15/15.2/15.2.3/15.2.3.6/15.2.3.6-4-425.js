var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: true
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        delete obj.prop;
        return propertyDefineCorrect && desc.configurable === true && !obj.hasOwnProperty('prop');
    });
runTestCase(testcase);