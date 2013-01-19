wrapTestObject(function testcase() {
    var o = wrapTestObject({
            x: 1,
            y: 2
        });
    var a = Object.keys(o);
    if (Object.isFrozen(a) === false) {
        return true;
    }
});
runTestCase(testcase);