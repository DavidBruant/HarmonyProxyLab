var testcase = wrapTestObject(function testcase() {
        var f = Object.freeze;
        if (typeof f === 'function') {
            return true;
        }
    });
runTestCase(testcase);