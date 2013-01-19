var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: false,
            writable: false,
            configurable: false
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: false }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', false, false, false, false);
    });
runTestCase(testcase);