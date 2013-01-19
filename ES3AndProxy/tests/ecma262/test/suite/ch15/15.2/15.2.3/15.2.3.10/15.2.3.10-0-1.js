var testcase = wrapTestObject(function testcase() {
        var f = Object.preventExtensions;
        if (typeof f === 'function') {
            return true;
        }
    });
runTestCase(testcase);