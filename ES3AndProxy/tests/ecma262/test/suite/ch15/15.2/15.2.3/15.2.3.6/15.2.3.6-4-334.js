var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        }));
        var propertyDefineCorrect = obj.hasOwnProperty('prop');
        var desc = Object.getOwnPropertyDescriptor(obj, 'prop');
        for (var p in obj) {
            if (p === 'prop') {
                return propertyDefineCorrect && desc.enumerable === true;
            }
        }
        return false;
    });
runTestCase(testcase);