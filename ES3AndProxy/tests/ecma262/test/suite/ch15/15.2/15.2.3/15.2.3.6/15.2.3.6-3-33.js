var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var fun = wrapTestObject(function () {
            });
        fun.enumerable = true;
        Object.defineProperty(obj, 'property', fun);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);