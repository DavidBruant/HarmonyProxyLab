var testcase = wrapTestObject(function testcase() {
        var obj = wrapTestObject({});
        var attr = wrapTestObject({});
        var accessed = false;
        Object.defineProperty(obj, 'property', attr);
        for (var prop in obj) {
            if (prop === 'property') {
                accessed = true;
            }
        }
        return !accessed;
    });
runTestCase(testcase);