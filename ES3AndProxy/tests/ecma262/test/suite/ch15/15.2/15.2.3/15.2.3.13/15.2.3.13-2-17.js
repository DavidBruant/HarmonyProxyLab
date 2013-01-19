wrapTestObject(function testcase() {
    var e = Object.isExtensible(Boolean.prototype);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);