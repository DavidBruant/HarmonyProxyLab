var testcase = wrapTestObject(function testcase() {
        var arg;
        wrapTestObject(function fun() {
            arg = arguments;
        })(1, 2, 3);
        Object.preventExtensions(arg);
        return !Object.isFrozen(arg);
    });
runTestCase(testcase);