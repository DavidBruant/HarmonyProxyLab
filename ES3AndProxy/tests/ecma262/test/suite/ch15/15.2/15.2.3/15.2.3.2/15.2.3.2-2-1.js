var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(Boolean) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);