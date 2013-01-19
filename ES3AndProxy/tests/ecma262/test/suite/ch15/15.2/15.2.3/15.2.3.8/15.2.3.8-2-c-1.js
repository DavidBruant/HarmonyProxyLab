var testcase = wrapTestObject(function testcase() {
        var fun = wrapTestObject(function () {
            });
        var preCheck = Object.isExtensible(fun);
        Object.seal(fun);
        return preCheck && Object.isSealed(fun);
    });
runTestCase(testcase);