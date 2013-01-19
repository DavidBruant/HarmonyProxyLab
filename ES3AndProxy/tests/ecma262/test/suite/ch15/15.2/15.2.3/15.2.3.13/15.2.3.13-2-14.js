wrapTestObject(function testcase() {
    var e = Object.isExtensible(Function.prototype);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);