var testcase = wrapTestObject(function testcase() {
        var o = wrapTestObject({});
        var e = Object.isExtensible(o);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);