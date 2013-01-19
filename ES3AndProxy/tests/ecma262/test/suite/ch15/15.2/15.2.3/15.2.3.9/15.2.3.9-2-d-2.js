var testcase = wrapTestObject(function testcase() {
        var arrObj = wrapTestObject([
                0,
                1
            ]);
        Object.freeze(arrObj);
        return Object.isFrozen(arrObj);
    });
runTestCase(testcase);