var testcase = wrapTestObject(function testcase() {
        var b = Object.isSealed(URIError);
        if (b === false) {
            return true;
        }
    });
runTestCase(testcase);