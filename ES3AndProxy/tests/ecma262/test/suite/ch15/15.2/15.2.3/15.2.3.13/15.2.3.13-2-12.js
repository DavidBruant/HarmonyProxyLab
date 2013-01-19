var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(JSON);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);