var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: true }) }));
        return arr.length === 1;
    });
runTestCase(testcase);