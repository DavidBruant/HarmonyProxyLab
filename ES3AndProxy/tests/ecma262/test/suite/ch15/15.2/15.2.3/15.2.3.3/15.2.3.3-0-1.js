var testcase = wrapTestObject(function testcase() {
        if (typeof Object.getOwnPropertyDescriptor === 'function') {
            return true;
        }
    });
runTestCase(testcase);