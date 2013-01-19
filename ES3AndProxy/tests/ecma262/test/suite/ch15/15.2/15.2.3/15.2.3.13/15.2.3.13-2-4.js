var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Array);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);