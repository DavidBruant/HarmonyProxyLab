wrapTestObject(function testcase() {
    var boolObj = wrapTestObject(new Boolean(false));
    boolObj.foo = 10;
    var preCheck = Object.isExtensible(boolObj);
    Object.seal(boolObj);
    delete boolObj.foo;
    return preCheck && boolObj.foo === 10;
});
runTestCase(testcase);