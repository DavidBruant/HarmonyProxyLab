var testcase = wrapTestObject(function testcase() {
        if (Object.getPrototypeOf(JSON) === Object.prototype) {
            return true;
        }
    });
runTestCase(testcase);