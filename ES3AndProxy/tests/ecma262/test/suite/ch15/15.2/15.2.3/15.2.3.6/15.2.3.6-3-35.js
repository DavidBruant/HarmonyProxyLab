var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var accessed = false;
        var strObj = wrapTestObject(new String());
        strObj.enumerable = true;
        Object.defineProperty(obj, 'property', strObj);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return accessed;
    });
runTestCase(testcase);