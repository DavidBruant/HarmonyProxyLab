wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    var preCheck = Object.isExtensible(regObj);
    Object.preventExtensions(regObj);
    regObj.exName = 2;
    return preCheck && !regObj.hasOwnProperty('exName');
});
runTestCase(testcase);