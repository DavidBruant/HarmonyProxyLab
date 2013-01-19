var testcase = wrapTestObject(function testcase() {
        var e = Object.isExtensible(Function.constructor);
        if (e === true) {
            return true;
        }
    });
runTestCase(testcase);