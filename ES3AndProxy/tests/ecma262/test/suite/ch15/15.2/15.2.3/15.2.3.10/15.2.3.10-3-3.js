wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    var preCheck = Object.isExtensible(funObj);
    Object.preventExtensions(funObj);
    funObj[0] = 12;
    return preCheck && !funObj.hasOwnProperty('0');
});
runTestCase(testcase);