var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(Array) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);