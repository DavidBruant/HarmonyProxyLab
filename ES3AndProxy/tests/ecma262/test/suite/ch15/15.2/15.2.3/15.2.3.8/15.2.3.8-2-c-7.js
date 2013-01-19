var testcase = wrapTestObject(function testcase() {
        var regObj = wrapTestObject(new RegExp());
        var preCheck = Object.isExtensible(regObj);
        Object.seal(regObj);
        return preCheck && Object.isSealed(regObj);
    });
runTestCase(testcase);