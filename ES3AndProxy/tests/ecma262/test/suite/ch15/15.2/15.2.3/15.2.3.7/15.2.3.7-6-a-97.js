var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 100,
            enumerable: true,
            writable: false,
            configurable: true
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ writable: true }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 100, true, true, true);
    });
runTestCase(testcase);