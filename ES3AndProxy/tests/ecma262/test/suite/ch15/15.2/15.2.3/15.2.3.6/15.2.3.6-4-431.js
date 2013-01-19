var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            get: undefined,
            set: undefined,
            enumerable: true,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && typeof desc.get === 'undefined';
    });
runTestCase(testcase);