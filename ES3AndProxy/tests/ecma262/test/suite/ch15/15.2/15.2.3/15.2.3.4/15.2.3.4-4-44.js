wrapTestObject(function testcase() {
    var str = wrapTestObject(new String('abc'));
    str[5] = 'de';
    var expResult = wrapTestObject([
            '0',
            '1',
            '2',
            'length',
            '5'
        ]);
    var result = Object.getOwnPropertyNames(str);
    return compareArray(expResult, result);
});
runTestCase(testcase);