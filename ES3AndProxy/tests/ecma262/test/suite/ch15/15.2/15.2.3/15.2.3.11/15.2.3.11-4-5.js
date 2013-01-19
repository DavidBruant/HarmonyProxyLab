wrapTestObject(function testcase() {
    var b = Object.isSealed(Function.prototype);
    if (b === false) {
        return true;
    }
});
runTestCase(testcase);