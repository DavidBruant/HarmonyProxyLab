var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
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