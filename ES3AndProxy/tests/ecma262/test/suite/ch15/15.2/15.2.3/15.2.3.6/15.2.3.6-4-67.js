var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: 'abcd' }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: 'abcd' }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 'abcd', false, false, false);
    });
runTestCase(testcase);