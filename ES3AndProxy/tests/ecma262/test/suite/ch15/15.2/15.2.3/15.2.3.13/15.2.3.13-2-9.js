var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Date);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);