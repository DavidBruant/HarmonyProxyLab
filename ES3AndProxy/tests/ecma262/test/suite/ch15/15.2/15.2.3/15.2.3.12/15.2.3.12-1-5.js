var testcase = wrapTestObject(function testcase() {
        var obj = Object.freeze(wrapTestObject([
                0,
                1,
                2
            ]));
        return Object.isFrozen(obj);
    });
runTestCase(testcase);