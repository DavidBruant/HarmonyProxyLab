wrapTestObject(function testcase() {
    var o = wrapTestObject([
            1,
            2
        ]);
    var a = Object.keys(o);
    if (a.length === 2 && a[0] === '0' && a[1] === '1') {
        return true;
    }
});
runTestCase(testcase);