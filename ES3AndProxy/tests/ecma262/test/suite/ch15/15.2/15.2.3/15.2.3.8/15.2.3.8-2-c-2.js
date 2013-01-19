wrapTestObject(function testcase() {
    var arr = wrapTestObject([
            0,
            1
        ]);
    var preCheck = Object.isExtensible(arr);
    Object.seal(arr);
    return preCheck && Object.isSealed(arr);
});
runTestCase(testcase);