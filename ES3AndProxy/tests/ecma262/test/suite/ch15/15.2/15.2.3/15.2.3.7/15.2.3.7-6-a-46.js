var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({ value: +0 });
        Object.defineProperty(obj, 'foo', desc);
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: -0 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', +0, false, false, false);
        }
    });
runTestCase(testcase);