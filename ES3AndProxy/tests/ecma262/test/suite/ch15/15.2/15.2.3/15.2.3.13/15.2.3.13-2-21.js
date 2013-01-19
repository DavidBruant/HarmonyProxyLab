wrapTestObject(function testcase() {
    var e = Object.isExtensible(Error.prototype);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);