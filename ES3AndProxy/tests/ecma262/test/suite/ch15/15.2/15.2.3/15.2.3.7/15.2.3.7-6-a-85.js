var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var obj1 = wrapTestObject({ length: 10 });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: obj1,
            writable: false,
            configurable: false
        }));
        var obj2 = wrapTestObject({ length: 20 });
        try {
            Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: obj2 }) }));
            return false;
        } catch (e) {
            return e instanceof TypeError && dataPropertyAttributesAreCorrect(obj, 'foo', obj1, false, false, false);
        }
    });
runTestCase(testcase);