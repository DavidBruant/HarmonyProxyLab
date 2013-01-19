wrapTestObject(function testcase() {
    var funObj = wrapTestObject(function () {
        });
    Object.freeze(funObj);
    return Object.isFrozen(funObj);
});
runTestCase(testcase);