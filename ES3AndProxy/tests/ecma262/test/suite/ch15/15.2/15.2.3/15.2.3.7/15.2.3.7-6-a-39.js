var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        obj.foo = 101;
        Object.defineProperties(obj, wrapTestObject({
            foo: wrapTestObject({
                value: 101,
                enumerable: true,
                writable: true,
                configurable: true
            })
        }));
        return dataPropertyAttributesAreCorrect(obj, 'foo', 101, true, true, true);
    });
runTestCase(testcase);