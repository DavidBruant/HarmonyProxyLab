var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '1', wrapTestObject({ value: true }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: false }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', true, false, false, false);
        }
    });
runTestCase(testcase);