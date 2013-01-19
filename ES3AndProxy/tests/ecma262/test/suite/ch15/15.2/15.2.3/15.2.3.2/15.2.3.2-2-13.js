var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(RangeError) === Function.prototype) {
            return true;
        }
    });
runTestCase(testcase);