wrapTestObject(function testcase() {
    var f = Object.seal;
    if (typeof f === 'function') {
        return true;
    }
});
runTestCase(testcase);