var testcase = wrapTestObject(function testcase() {
        var f = Object.isFrozen;
        if (typeof f === 'function') {
            return true;
        }
    });
runTestCase(testcase);