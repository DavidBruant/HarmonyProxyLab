var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: null }));
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: null }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', null, false, false, false);
    });
runTestCase(testcase);