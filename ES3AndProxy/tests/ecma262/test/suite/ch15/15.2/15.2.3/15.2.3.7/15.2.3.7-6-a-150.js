var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 4294967294 }) }));
        return arr.length === 4294967294;
    });
runTestCase(testcase);