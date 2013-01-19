var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 101;
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: '102' }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', '102', true, true, true);
    });
runTestCase(testcase);