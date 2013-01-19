var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        Object.defineProperty(obj, 'property', wrapTestObject({
            writable: true,
            enumerable: true,
            configurable: false
        }));
        return dataPropertyAttributesAreCorrect(obj, 'property', undefined, true, true, false);
    });
runTestCase(testcase);