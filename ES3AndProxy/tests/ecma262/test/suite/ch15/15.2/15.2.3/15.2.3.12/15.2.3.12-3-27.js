wrapTestObject(function testcase() {
    var b = Object.isFrozen(JSON);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);