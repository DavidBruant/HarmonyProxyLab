var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'foo', wrapTestObject({
            value: 100,
            writable: true,
            configurable: true
        }));
        Object.defineProperties(obj, wrapTestObject({
            foo: wrapTestObject({
                value: 200,
                writable: false,
                configurable: false
            })
        }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 200, false, false, false);
    });
runTestCase(testcase);