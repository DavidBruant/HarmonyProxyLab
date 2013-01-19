wrapTestObject(function testcase() {
    var obj = wrapTestObject(new Boolean(true));
    return Object.getPrototypeOf(obj) === Boolean.prototype;
});
runTestCase(testcase);