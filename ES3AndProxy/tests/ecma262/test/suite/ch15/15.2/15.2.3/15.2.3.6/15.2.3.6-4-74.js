var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            writable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ writable: true }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, true, false, true);
    });
runTestCase(testcase);