var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: true });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: true }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', true, false, false, false);
    });
runTestCase(testcase);