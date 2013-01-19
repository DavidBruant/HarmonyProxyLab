var testcase = wrapTestObject(function testcase() {
        if (typeof Object.create === 'function') {
            return true;
        }
    });
runTestCase(testcase);