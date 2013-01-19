var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ configurable: false }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 1001, true, true, false);
    });
runTestCase(testcase);