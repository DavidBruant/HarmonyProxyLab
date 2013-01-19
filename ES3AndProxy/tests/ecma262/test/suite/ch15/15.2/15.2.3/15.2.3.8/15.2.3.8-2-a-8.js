wrapTestObject(function testcase() {
    var arrObj = wrapTestObject([]);
    arrObj.foo = 10;
    var preCheck = Object.isExtensible(arrObj);
    Object.seal(arrObj);
    delete arrObj.foo;
    return preCheck && arrObj.foo === 10;
});
runTestCase(testcase);