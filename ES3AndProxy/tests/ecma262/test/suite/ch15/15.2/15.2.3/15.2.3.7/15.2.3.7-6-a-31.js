var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperties(obj, wrapTestObject({
            prop: wrapTestObject({
                value: 1002,
                writable: false,
                enumerable: false,
                configurable: false
            })
        }));
        return dataPropertyAttributesAreCorrect(obj, 'prop', 1002, false, false, false);
    });
runTestCase(testcase);