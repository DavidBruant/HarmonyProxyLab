var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '1', wrapTestObject({ value: 12 }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 36 }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', 12, false, false, false);
        }
    });
runTestCase(testcase);