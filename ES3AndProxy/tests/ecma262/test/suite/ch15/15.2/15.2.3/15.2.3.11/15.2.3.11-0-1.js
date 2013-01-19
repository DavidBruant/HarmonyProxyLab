wrapTestObject(function testcase() {
    var f = Object.isSealed;
    if (typeof f === 'function') {
        return true;
    }
});
runTestCase(testcase);