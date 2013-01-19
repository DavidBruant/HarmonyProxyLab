var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = undefined;
        Object.defineProperty(obj, 'foo', wrapTestObject({ value: 100 }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 100, true, true, true);
    });
runTestCase(testcase);