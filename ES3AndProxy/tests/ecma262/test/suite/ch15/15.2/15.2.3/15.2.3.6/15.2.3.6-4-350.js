var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: false,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        Object.defineProperty(obj, 'prop', wrapTestObject({ writable: false }));
        var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
        return propertyDefineCorrect && desc1.writable === true && obj.prop === 2010 && desc2.writable === false;
    });
runTestCase(testcase);