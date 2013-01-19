var testcase = wrapTestObject(function testcase() {
        var boolObj = wrapTestObject(new Boolean(false));
        var preCheck = Object.isExtensible(boolObj);
        Object.seal(boolObj);
        return preCheck && Object.isSealed(boolObj);
    });
runTestCase(testcase);