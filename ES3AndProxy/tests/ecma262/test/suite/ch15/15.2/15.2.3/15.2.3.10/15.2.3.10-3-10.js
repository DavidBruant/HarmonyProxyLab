wrapTestObject(function testcase() {
    var errObj = wrapTestObject(new Error());
    var preCheck = Object.isExtensible(errObj);
    Object.preventExtensions(errObj);
    errObj[0] = 12;
    return preCheck && !errObj.hasOwnProperty('0');
});
runTestCase(testcase);