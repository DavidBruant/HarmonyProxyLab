var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Boolean);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);