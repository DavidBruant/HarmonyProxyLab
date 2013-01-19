wrapTestObject(function testcase() {
    var e = Object.isExtensible(Number.prototype);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);