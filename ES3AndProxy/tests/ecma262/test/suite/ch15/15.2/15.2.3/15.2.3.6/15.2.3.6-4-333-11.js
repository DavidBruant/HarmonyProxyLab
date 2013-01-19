var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function (x) {
                return arguments;
            })(1001);
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        }));
        var verifyValue = obj[0] === 2010;
        return verifyValue;
    });
runTestCase(testcase);