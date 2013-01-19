wrapTestObject(function testcase() {
    var obj = Object.freeze(wrapTestObject({
            0: 0,
            1: 1,
            1000: 1000
        }));
    return Object.isFrozen(obj);
});
runTestCase(testcase);