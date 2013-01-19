wrapTestObject(function testcase() {
    var numObj = wrapTestObject(new Number(-1));
    numObj.foo = 10;
    var preCheck = Object.isExtensible(numObj);
    Object.seal(numObj);
    delete numObj.foo;
    return preCheck && numObj.foo === 10;
});
runTestCase(testcase);