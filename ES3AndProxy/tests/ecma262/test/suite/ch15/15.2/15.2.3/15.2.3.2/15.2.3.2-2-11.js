var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(Error) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);