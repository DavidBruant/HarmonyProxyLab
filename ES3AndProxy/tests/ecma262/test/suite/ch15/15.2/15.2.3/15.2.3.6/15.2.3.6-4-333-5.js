var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        }));
        var verifyValue = obj.prop === 2010;
        obj.prop = 1001;
        return verifyValue && obj.prop === 1001;
    });
runTestCase(testcase);