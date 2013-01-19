var testcase = wrapTestObject(function testcase() {
        return !Object.isFrozen(wrapTestObject({}));
    });
runTestCase(testcase);