wrapTestObject(function testcase() {
    var o = wrapTestObject({
            x: 1,
            y: 2
        });
    var a = Object.keys(o);
    var s = Object.prototype.toString.call(a);
    if (s === '[object Array]') {
        return true;
    }
});
runTestCase(testcase);