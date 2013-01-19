wrapTestObject(function testcase() {
    if (Object.getPrototypeOf(URIError) === Function.prototype) {
        return true;
    }
});
runTestCase(testcase);