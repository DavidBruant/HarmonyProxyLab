var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 100,
            writable: false,
            configurable: false
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 100 }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 100, false, false, false);
    });
runTestCase(testcase);