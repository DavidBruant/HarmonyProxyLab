global = this;
wrapTestObject(function testcase() {
    var e = Object.isExtensible(this);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);