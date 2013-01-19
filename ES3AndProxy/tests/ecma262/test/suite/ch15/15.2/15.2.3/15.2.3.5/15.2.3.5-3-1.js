wrapTestObject(function testcase() {
    wrapTestObject(function base() {
    });
    var b = wrapTestObject(new base());
    var d = Object.create(b);
    if (Object.getPrototypeOf(d) === b && b.isPrototypeOf(d) === true) {
        return true;
    }
});
runTestCase(testcase);