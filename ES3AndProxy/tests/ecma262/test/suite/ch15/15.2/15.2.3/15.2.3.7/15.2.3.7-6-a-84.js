var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var obj1 = wrapTestObject({ length: 10 });
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: obj1,
            writable: false,
            configurable: false
        }));
        Object.defineProperties(obj, wrapTestObject({ foo: wrapTestObject({ value: obj1 }) }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', obj1, false, false, false);
    });
runTestCase(testcase);