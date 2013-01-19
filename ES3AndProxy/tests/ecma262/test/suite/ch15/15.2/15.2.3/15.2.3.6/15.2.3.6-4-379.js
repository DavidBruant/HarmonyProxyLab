var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc1 = Object.getOwnPropertyDescriptor(obj, 'prop');
        try {
            Object.defineProperty(obj, 'prop', wrapTestObject({ enumerable: true }));
            return false;
        } catch (e) {
            var desc2 = Object.getOwnPropertyDescriptor(obj, 'prop');
            return propertyDefineCorrect && desc1.enumerable === false && obj.prop === 2010 && desc2.enumerable === false && e instanceof TypeError;
        }
    });
runTestCase(testcase);