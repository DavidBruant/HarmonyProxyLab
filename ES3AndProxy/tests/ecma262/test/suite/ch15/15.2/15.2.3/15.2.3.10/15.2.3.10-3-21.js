wrapTestObject(function testcase() {
    var argObj;
    wrapTestObject(function () {
        argObj = arguments;
    })();
    var preCheck = Object.isExtensible(argObj);
    Object.preventExtensions(argObj);
    argObj.exName = 2;
    return preCheck && !argObj.hasOwnProperty('exName');
});
runTestCase(testcase);