var testcase = wrapTestObject(function testcase() {
        var f = Object.isExtensible;
        if (typeof f === 'function') {
            return true;
        }
    });
runTestCase(testcase);