var testcase = wrapTestObject(function testcase() {
        var arg = wrapTestObject(function () {
                return arguments;
            })(1, 2, 3);
        var accessed = false;
        Object.defineProperties(arg, wrapTestObject({
            '0': wrapTestObject({
                get: wrapTestObject(function () {
                    accessed = true;
                    return 12;
                })
            })
        }));
        return arg[0] === 12 && accessed;
    });
runTestCase(testcase);