var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 100;
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({}) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 100, true, true, true);
    });
runTestCase(testcase);