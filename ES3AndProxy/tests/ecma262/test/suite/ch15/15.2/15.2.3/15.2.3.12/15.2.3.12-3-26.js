wrapTestObject(function testcase() {
    var b = Object.isFrozen(URIError);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);