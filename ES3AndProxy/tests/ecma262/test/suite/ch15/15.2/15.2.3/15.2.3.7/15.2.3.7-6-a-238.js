var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '1', wrapTestObject({ value: 'abcd' }));
        try {
            Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 'efgh' }) }));
            return false;
        } catch (ex) {
            return ex instanceof TypeError && dataPropertyAttributesAreCorrect(arr, '1', 'abcd', false, false, false);
        }
    });
runTestCase(testcase);