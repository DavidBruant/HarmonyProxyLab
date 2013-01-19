wrapTestObject(function testcase() {
    var f = Object.defineProperties;
    if (typeof f === 'function') {
        return true;
    }
});
runTestCase(testcase);