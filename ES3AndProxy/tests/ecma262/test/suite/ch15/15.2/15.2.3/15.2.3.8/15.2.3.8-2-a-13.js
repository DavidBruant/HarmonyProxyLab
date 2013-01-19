wrapTestObject(function testcase() {
    var regObj = wrapTestObject(new RegExp());
    regObj.foo = 10;
    var preCheck = Object.isExtensible(regObj);
    Object.seal(regObj);
    delete regObj.foo;
    return preCheck && regObj.foo === 10;
});
runTestCase(testcase);