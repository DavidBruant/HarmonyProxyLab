wrapTestObject(function testcase() {
    var b = Object.isFrozen(Object);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);