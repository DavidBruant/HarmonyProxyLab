wrapTestObject(function testcase() {
    var obj = wrapTestObject(new Date());
    return Object.getPrototypeOf(obj) === Date.prototype;
});
runTestCase(testcase);