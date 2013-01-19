wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1,
            2
        ]);
    var expResult = wrapTestObject([
            '0',
            '1',
            '2',
            'length'
        ]);
    var result = Object.getOwnPropertyNames(arr);
    return compareArray(expResult, result);
});
runTestCase(testcase);