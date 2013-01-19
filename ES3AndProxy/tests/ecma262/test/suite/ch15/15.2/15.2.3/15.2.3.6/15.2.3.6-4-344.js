var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: false,
            configurable: true
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ enumerable: true }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && desc1.enumerable === false && obj.prop === 2010 && desc2.enumerable === true;
    });
runTestCase(testcase);