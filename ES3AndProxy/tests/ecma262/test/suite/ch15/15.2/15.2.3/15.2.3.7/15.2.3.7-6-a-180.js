var testcase = wrapTestObject(function testcase() {
        var arr = wrapTestObject([]);
        Object.defineProperties(arr, wrapTestObject({ '4294967295': wrapTestObject({ value: 100 }) }));
        return arr.hasOwnProperty('4294967295') && arr.length === 0 && arr[4294967295] === 100;
    });
runTestCase(testcase);