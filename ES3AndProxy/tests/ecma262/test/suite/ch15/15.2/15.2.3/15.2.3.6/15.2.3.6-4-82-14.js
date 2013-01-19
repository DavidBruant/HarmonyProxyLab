var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, '0', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, '0', wrapTestObject({
            enumerable: false,
            configurable: true
        }));
        return dataPropertyAttributesAreCorrect(obj, '0', 1001, true, false, true);
    });
runTestCase(testcase);