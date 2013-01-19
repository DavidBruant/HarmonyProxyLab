wrapTestObject(function testcase() {
    var argObj = wrapTestObject(function () {
            return arguments;
        })();
    Object.freeze(argObj);
    return Object.isFrozen(argObj);
});
runTestCase(testcase);