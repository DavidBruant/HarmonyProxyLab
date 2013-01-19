var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([12]);
        try {
            Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: undefined }) }));
            return dataPropertyAttributesAreCorrect(arr, '0', undefined, true, true, true);
        } catch (ex) {
            return false;
        }
    });
runTestCase(testcase);