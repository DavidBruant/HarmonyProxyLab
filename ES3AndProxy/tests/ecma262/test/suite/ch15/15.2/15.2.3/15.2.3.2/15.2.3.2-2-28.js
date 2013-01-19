var testcase = wrapTestObject(function testcase() {
        var fun = wrapTestObject(function fun() {
                return arguments;
            });
        var obj = fun(1, true, 3);
        return Object.getPrototypeOf(obj) === Object.prototype;
    });
runTestCase(testcase);