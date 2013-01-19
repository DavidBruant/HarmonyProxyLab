var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperty(arr, '0', wrapTestObject({ value: NaN }));
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: NaN }) }));
        return dataPropertyAttributesAreCorrect(arr, '0', NaN, false, false, false);
    });
runTestCase(testcase);