var testcase = wrapTestObject(function testcase() {
        try {
            Object.create(null);
            return true;
        } catch (e) {
            return false;
        }
    });
runTestCase(testcase);