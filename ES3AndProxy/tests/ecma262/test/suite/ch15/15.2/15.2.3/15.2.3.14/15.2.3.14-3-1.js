wrapTestObject(function testcase() {
    var o = wrapTestObject({
            x: 1,
            y: 2
        });
    var a = Object.keys(o);
    if (a.length === 2 && a[0] === 'x' && a[1] === 'y') {
        return true;
    }
});
runTestCase(testcase);