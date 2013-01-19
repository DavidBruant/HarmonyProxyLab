var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            value: 1001,
            writable: true,
            configurable: true
        }));
        return dataPropertyAttributesAreCorrect(obj, 'property', 1001, true, false, true);
    });
runTestCase(testcase);