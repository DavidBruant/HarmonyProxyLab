var testcase = wrapTestObject(function testcase() {
        var argObj = wrapTestObject(function (a, b, c) {
                return arguments;
            })(1, 2, 3);
        var accessed = false;
        Object.defineProperty(argObj, 0, wrapTestObject({
            get: wrapTestObject(function () {
                accessed = true;
                return 12;
            })
        }));
        return argObj[0] === 12 && accessed;
    });
runTestCase(testcase);