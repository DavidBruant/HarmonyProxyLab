var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([100]);
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ writable: false }) }));
            return dataPropertyAttributesAreCorrect(arr, '0', 100, false, true, true);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);