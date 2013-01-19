var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: false,
            writable: false,
            configurable: false
        }));
        try {
            Object.defineProperty(obj, 'foo', wrapTestObject({ value: true }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', false, false, false, false);
        }
    });
runTestCase(testcase);