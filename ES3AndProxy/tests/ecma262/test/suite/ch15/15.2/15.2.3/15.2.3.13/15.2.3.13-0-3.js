var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject(new Object());
        if (Object.isExtensible(o) === true) {
            return true;
        }
    });
runTestCase(testcase);