var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject([]);
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 2010,
            writable: false,
            enumerable: true,
            configurable: true
        }));
        var verifyValue = obj[0] === 2010;
        obj[0] = 1001;
        return verifyValue && obj[0] === 2010;
    });
runTestCase(testcase);