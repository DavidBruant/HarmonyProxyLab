var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Date.prototype);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);