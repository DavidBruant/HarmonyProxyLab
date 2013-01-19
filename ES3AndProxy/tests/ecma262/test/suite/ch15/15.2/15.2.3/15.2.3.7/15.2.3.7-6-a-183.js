var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([
                1,
                2,
                3
            ]);
        Object.defineProperty(arr, 'length', wrapTestObject({ writable: false }));
        Object.defineProperties(arr, wrapTestObject({ '1': wrapTestObject({ value: 'abc' }) }));
        return arr[0] === 1 && arr[1] === 'abc' && arr[2] === 3;
    });
runTestCase(testcase);