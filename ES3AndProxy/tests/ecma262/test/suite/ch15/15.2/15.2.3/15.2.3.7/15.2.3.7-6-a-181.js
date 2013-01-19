var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ '4294967296': wrapTestObject({ value: 100 }) }));
        return arr.hasOwnProperty('4294967296') && arr.length === 0 && arr[4294967296] === 100;
    });
runTestCase(testcase);