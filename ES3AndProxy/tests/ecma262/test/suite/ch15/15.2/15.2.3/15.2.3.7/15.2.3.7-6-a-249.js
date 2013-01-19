var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([undefined]);
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 12 }) }));
            return dataPropertyAttributesAreCorrect(arr, '0', 12, true, true, true);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);