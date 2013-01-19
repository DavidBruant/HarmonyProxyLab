var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Error);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);