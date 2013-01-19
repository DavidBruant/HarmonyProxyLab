var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ writable: false });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ writable: false }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, false, false, false);
    });
runTestCase(testcase);