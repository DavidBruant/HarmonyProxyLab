var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ enumerable: true }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 1001, true, true, true);
    });
runTestCase(testcase);