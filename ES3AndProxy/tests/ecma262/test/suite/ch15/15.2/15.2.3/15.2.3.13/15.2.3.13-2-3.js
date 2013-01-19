wrapTestObject(function testcase() {
    wrapTestObject(function foo() {
    });
    var e = Object.isExtensible(foo);
    if (e === true) {
        return true;
    }
});
runTestCase(testcase);