var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            enumerable: false,
            configurable: true
        }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ enumerable: true }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, true, true);
    });
runTestCase(testcase);