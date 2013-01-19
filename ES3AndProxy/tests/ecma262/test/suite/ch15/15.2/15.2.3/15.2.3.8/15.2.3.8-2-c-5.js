wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(3));
    var preCheck = Object.isExtensible(numObj);
    Object.seal(numObj);
    return preCheck && Object.isSealed(numObj);
});
runTestCase(testcase);