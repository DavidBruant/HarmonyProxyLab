wrapTestObject(function testcase() {
    var dateObj = wrapTestObject(new Date());
    dateObj.foo = 10;
    var preCheck = Object.isExtensible(dateObj);
    Object.seal(dateObj);
    delete dateObj.foo;
    return preCheck && dateObj.foo === 10;
});
runTestCase(testcase);