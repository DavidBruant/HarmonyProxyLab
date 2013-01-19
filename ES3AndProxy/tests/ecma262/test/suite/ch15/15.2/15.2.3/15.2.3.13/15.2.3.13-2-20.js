var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(RegExp.prototype);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);