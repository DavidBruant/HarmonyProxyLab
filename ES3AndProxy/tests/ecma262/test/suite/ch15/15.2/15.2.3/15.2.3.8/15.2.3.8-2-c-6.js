var testcase = wrapTestObject(function testcase() {
        var dateObj = wrapTestObject(new Date());
        var preCheck = Object.isExtensible(dateObj);
        Object.seal(dateObj);
        return preCheck && Object.isSealed(dateObj);
    });
runTestCase(testcase);