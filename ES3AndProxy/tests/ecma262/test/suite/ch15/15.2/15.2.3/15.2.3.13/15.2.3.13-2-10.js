wrapTestObject(function testcase() {
    var e = Object.isExtensible(RegExp);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);