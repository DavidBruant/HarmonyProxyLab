var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var errObj = wrapTestObject(new Error());
        errObj.enumerable = true;
        Object.defineProperty(obj, 'property', errObj);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);