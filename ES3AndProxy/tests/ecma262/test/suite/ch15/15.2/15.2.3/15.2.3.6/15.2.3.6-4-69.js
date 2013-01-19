var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: true }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: true }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', true, false, false, false);
    });
runTestCase(testcase);