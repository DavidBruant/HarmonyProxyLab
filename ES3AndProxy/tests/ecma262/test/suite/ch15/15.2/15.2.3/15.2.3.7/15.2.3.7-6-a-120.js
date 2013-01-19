var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        try {
            Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ writable: false }) }));
            return dataPropertyAttributesAreCorrect(arr, 'length', 0, false, false, false);
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);