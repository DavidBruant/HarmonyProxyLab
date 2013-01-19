var testcase = wrapTestObject(function testcase() {
        var strObj = wrapTestObject(new String('a'));
        var preCheck = Object.isExtensible(strObj);
        Object.seal(strObj);
        return preCheck && Object.isSealed(strObj);
    });
runTestCase(testcase);