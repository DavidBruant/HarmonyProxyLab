var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                0,
                1
            ]);
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 1 }) }));
        return arr.length === 1 && !arr.hasOwnProperty('1') && arr[0] === 0;
    });
runTestCase(testcase);