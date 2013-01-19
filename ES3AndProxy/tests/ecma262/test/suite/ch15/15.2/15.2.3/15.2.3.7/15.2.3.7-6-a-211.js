var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '0', wrapTestObject({ value: null }));
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: null }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', null, false, false, false);
    });
runTestCase(testcase);