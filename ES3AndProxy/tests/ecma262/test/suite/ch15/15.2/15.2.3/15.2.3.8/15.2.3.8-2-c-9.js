var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function () {
                return arguments;
            })();
        var preCheck = Object.isExtensible(argObj);
        Object.seal(argObj);
        return preCheck && Object.isSealed(argObj);
    });
runTestCase(testcase);