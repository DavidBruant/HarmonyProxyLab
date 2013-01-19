var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({ 'property': 1 });
        Object.defineProperty(obj, 'property', wrapTestObject({
            value: 1001,
            writable: false,
            enumerable: false,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(obj, 'property', 1001, false, false, false);
    });
runTestCase(testcase);