wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    var preCheck = Object.isExtensible(funObj);
    Object.preventExtensions(funObj);
    funObj.exName = 2;
    return preCheck && !funObj.hasOwnProperty('exName');
});
runTestCase(testcase);