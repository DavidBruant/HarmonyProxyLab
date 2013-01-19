var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(Number) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);