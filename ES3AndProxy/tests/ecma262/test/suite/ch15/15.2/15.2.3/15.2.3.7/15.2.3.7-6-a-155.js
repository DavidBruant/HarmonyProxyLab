wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            ,
            2
        ]);
    try {
        Object.defineProperties(arr, wrapTestObject({ length: wrapTestObject({ value: 5 }) }));
        return arr.length === 5 && arr[0] === 0 && !arr.hasOwnProperty('1') && arr[2] === 2;
    } catch (e) {
        return false;
    }
});
runTestCase(testcase);