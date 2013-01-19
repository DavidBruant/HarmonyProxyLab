var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, 'property', wrapTestObject({ value: 12 }));
        try {
            Object.defineProperties(arr, wrapTestObject({ 'property': wrapTestObject({ value: 36 }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, 'property', 12, false, false, false);
        }
    });
runTestCase(testcase);