var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(String);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);