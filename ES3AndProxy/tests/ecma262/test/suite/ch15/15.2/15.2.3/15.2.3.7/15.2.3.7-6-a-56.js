var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var desc = wrapTestObject({
                writable: false,
                configurable: true
            });
        Object.defineProperty(obj, 'foo', desc);
        Object.defineProperties(obj, wrapTestObject({
            foo: wrapTestObject({
                writable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', undefined, true, false, true);
    });
runTestCase(testcase);