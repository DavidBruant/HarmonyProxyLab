wrapTestObject(function testcase() {
    wrapTestObject(function base() {
    });
    wrapTestObject(function derived() {
    });
    derived.prototype = wrapTestObject(new base());
    var d = wrapTestObject(new derived());
    var x = Object.getPrototypeOf(d);
    if (x.isPrototypeOf(d) === true) {
        return true;
    }
});
runTestCase(testcase);