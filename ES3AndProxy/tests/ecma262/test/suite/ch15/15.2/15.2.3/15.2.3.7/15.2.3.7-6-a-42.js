var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: undefined });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: undefined }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
    });
runTestCase(testcase);