var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        arr[0] = 101;
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({}) }));
            return dataPropertyAttributesAreCorrect(arr, '0', 101, true, true, true);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);