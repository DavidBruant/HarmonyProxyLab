var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, 'prop', wrapTestObject({
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        }));
        var valueVerify = obj.prop === 2010;
        obj.prop = 1001;
        return valueVerify && obj.prop === 2010;
    });
runTestCase(testcase);