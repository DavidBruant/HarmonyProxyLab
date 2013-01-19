var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(Date) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);