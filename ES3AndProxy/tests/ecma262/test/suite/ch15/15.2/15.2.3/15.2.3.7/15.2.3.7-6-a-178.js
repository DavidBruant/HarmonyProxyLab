var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([0]);
        Object.defineProperties(arr, wrapTestObject({ '0': wrapTestObject({ value: 12 }) }));
        return arr[0] === 12;
    });
runTestCase(testcase);