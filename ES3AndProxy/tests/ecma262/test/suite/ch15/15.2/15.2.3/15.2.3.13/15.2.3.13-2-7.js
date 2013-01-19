var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Number);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);