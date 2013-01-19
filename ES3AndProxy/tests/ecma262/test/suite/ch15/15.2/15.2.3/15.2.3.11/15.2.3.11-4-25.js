wrapTestObject(function testcase() {
    var b = Object.isSealed(TypeError);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);