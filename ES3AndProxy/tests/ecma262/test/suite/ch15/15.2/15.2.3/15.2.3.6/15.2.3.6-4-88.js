var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 100,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ value: 100 }));
            return dataPropertyAttributesAreCorrect(obj, 'foo', 100, false, false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);