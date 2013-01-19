var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        var propertyDefineCorrect = obj.prop === 2010;
        obj.prop = 1001;
        return propertyDefineCorrect && obj.prop === 1001;
    });
runTestCase(testcase);