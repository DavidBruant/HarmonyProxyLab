var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(String) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);