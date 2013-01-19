wrapTestObject(function testcase() {
    wrapTestObject(function base() {
    });
    var b = wrapTestObject(new base());
    var prop = wrapTestObject(new Object());
    var d = Object.create(b);
    if (typeof d === 'object') {
        return true;
    }
});
runTestCase(testcase);