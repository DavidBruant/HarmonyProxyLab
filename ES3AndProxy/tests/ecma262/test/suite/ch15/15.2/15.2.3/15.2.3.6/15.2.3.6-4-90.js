var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 'abcd',
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ value: 'abcd' }));
            return dataPropertyAttributesAreCorrect(obj, 'foo', 'abcd', false, false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);