wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    var preCheck = Object.isExtensible(regObj);
    Object.preventExtensions(regObj);
    regObj[0] = 12;
    return preCheck && !regObj.hasOwnProperty('0');
});
runTestCase(testcase);