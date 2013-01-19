var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: 101 });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: 101 }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 101, false, false, false);
    });
runTestCase(testcase);