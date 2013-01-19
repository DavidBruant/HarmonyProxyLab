var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 10,
            enumerable: false,
            configurable: false
        }));
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ enumerable: true }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', 10, false, false, false);
        }
    });
runTestCase(testcase);