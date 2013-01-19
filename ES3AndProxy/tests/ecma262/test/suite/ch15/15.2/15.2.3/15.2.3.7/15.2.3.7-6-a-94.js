var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 100;
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 200 }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 200, true, true, true);
    });
runTestCase(testcase);