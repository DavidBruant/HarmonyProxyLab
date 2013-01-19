var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: 'abcd' });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 'abcd' }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 'abcd', false, false, false);
    });
runTestCase(testcase);