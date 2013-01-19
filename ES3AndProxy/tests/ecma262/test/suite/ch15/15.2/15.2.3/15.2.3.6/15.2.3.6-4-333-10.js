var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject(function () {
                return arguments;
            })();
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        }));
        var verifyValue = obj[0] === 2010;
        obj[0] = 1001;
        return verifyValue && obj[0] === 1001;
    });
runTestCase(testcase);