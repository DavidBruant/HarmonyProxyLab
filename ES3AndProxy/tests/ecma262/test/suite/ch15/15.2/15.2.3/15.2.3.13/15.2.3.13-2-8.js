var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Math);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);