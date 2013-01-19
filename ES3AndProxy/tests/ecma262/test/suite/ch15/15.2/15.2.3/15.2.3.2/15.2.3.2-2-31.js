wrapTestObject(function testcase() {
    return Object.getPrototypeOf(Object.prototype) === null;
});
runTestCase(testcase);