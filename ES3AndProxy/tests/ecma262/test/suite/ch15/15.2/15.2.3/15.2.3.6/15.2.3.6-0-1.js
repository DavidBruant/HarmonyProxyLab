wrapTestObject(function testcase() {
    var f = Object.defineProperty;
    if (typeof f === 'function') {
        return true;
    }
});
runTestCase(testcase);