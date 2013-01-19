var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(String.prototype);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);