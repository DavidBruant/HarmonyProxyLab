wrapTestObject(function testcase() {
    var e = Object.isExtensible(Array.prototype);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);