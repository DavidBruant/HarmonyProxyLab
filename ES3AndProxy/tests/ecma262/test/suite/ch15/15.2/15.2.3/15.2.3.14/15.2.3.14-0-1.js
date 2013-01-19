wrapTestObject(function testcase() {
    var f = Object.keys;
    if (typeof f === 'function') {
        return true;
    }
});
runTestCase(testcase);