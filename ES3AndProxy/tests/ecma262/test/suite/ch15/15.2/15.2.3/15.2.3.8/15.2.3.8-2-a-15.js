wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    argObj.foo = 10;
    var preCheck = Object.isExtensible(argObj);
    Object.seal(argObj);
    delete argObj.foo;
    return preCheck && argObj.foo === 10;
});
runTestCase(testcase);