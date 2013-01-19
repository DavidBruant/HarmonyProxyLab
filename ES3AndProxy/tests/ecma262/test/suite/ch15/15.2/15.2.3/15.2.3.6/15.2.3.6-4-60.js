var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 101;
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: 'abc' }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 'abc', true, true, true);
    });
runTestCase(testcase);